const express = require('express')
const router = express.Router()
const {
  getAllPhones,
  getPhone,
  postPhone,
  deletePhone,
  updatePhone
} = require('../controllers/PhoneController')

router.get('/', getAllPhones)
  .get('/:id', getPhone)
  .post('/', postPhone)
  .delete('/:id', deletePhone)
  .put('/:id', updatePhone)

module.exports = router
