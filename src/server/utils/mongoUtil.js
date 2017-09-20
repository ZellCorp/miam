const MongoClient = require('mongodb').MongoClient;
var dbConnexion = {};

//Export will allow to use connectToServer and getDb anywhere in application.

module.exports = {
  connectToServer: new Promise((resolve, reject) => {
    MongoClient.connect("mongodb://localhost:27017/local", (err, db) => {
      if (db) {
        dbConnexion = db;
        resolve();
      } else reject(err);
    });
  }),
  getDb: () => dbConnexion
};
