const Phone = require('../models/Phone');

const getAllPhones = async (req, res, next) => {
  try {
    const phones = await Phone.find();
    return res.status(200).json(phones);
  } catch (error) {
    return next(error);
  }
};

const getPhone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phoneData = await Phone.findById(id);
    phoneData
      ? res.status(200).json(phoneData)
      : res.status(404).json('No phone found');
  } catch (error) {
    return next(error);
  }
};

const postPhone = async (req, res, next) => {
  try {
    const newPhone = new Phone(
      {
        id: req.body.id ,
        name: req.body.name ,
        manufacturer: req.body.manufacturer ,
        description: req.body.description ,
        color: req.body.color ,
        price: req.body.price ,
        imageFileName: req.body.imageFileName ,
        screen: req.body.screen ,
        processor: req.body.processor ,
        ram: req.body.ram ,
      }
    );
    const createdPhone = await newPhone.save();
    return res.status(201).json(createdPhone);
  } catch (error) {
    return next(error);
  }
};

const deletePhone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phoneToDelete = await Phone.findByIdAndRemove(id);
    phoneToDelete 
      ? res.status(200).json('Phone deleted')
      : res.status(404).json('Phone not found, not deleted phone');
  } catch (error) {
    return next(error);
  }
};

const updatePhone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phoneToUpdate = new Phone (
      {
        id: req.body.id ,
        name: req.body.name ,
        manufacturer: req.body.manufacturer ,
        description: req.body.description ,
        color: req.body.color ,
        price: req.body.price ,
        imageFileName: req.body.imageFileName ,
        screen: req.body.screen ,
        processor: req.body.processor ,
        ram: req.body.ram ,
      }
    )
    phoneToUpdate._id = id;
    const phoneDb = await Phone.findByIdAndUpdate(id, phoneToUpdate)
    phoneDb
    ? res.status(200).json('Phone updated')
    : res.status(404).json('No phone found, no phone updated')
  } catch (error) {
    return next(error);
  }
}


module.exports = {
  getAllPhones,
  getPhone,
  postPhone,
  deletePhone,
  updatePhone
}