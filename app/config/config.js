module.exports = {
  PORT: process.env.PORT || 3002,
  DB: process.env.MONGO_DB_STRING || 'mongodb://localhost:27017',
  COLLECTION: 'phones'
}
