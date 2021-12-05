require('dotenv').config()
const Phone = require('../app/models/Phone')
const { connect } = require('../app/config/database')
const mockPhones = require('../mongo-seed/seed-phones')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app/app')

const request = supertest(app)

describe('Phones', () => {
  beforeAll(() => {
    connect()
  })
  beforeEach(async () => {
    await Phone.deleteMany({})
    await Phone.insertMany(mockPhones)
  })

  it('gets all phones', async () => {
    const response = await request.get('/phones')
    const phonesList = response.body
    expect(phonesList).toHaveLength(8)
  })

  it('gets phone by id', async () => {
    const phonesResponse = await request.get('/phones')
    const firstPhoneId = phonesResponse.body[0]._id
    const phoneByIdResponse = await request.get(`/phones/${firstPhoneId}`)
    expect(phoneByIdResponse.body._id).toEqual(firstPhoneId)
  })

  afterAll(async () => {
    await Phone.deleteMany({})
    mongoose.connection.close()
  })
})
