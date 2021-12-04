const express = require('express');
const router = require('./routes/phones');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/phones', router);

app.use('*', (req,res,next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error)
})
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error')
})



module.exports = app;