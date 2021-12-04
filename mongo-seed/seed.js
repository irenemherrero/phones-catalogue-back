const Phone = require('../app/models/Phone')
const mockPhones = require('./seed-phones')
const mongoose = require('mongoose');
const { connect } = require('../app/config/database');

const seedDB = async () => {
    connect()
    await Phone.deleteMany({})
    await Phone.insertMany(mockPhones)
}

seedDB().then(() => {
    mongoose.connection.close()
})