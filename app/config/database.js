const mongoose = require('mongoose');
const CONFIG = require('./config');

const connect = async () => {
  try {
    const db = await mongoose.connect(CONFIG.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connected to data base in collection ${CONFIG.COLLECTION}`)

  } catch (error) {
    console.log(`Error in database connection: ${error}`);
  }
}
module.exports = {
  connect,
};