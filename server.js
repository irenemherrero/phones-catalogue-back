const CONFIG = require('./app/config/config');
const app = require('./app/app');

app.listen(CONFIG.PORT, error => {
error 
  ? console.log(`Error at listening port: ${CONFIG.PORT}`, error)
  : console.log(`SERVER RUNNING on port ${CONFIG.PORT}`)
});