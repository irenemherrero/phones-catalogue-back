const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_DB
} = process.env;

module.exports = {
  PORT: process.env.PORT || 3000,
  DB: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}`,
  COLLECTION: 'phones'
}