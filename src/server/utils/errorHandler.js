//Export will allow to handle the server error.
module.exports = {
  genericError: (err, req, res, next) => {
    console.error(err.stack + '\n\n');
    res.status(500).send('Something broksssse!');
  },

  customError: (err, req, res, next) => {
    console.log(err);
    res.status(err.status).send('Something broke!');
  }

};
