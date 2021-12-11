console.log('process.env.DB', process.env.MONGO_DB_STRING)

module.exports = {
  PORT: process.env.PORT || 3000,
  DB: process.env.MONGO_DB_STRING || 'mongodb://localhost:27017',
  COLLECTION: 'phones'
}
