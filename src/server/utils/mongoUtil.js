var MongoClient = require( 'mongodb' ).MongoClient;
dbConnexion = {};

//Export will allow to use connectToServer and getDb anywhere in application.
module.exports = {
  connectToServer: function(initServer) {
    MongoClient.connect( "mongodb://localhost:27017/local", function( err, db ) {
      dbConnexion = db;
      callback();
    } );
    return dbConnexion;
  },

  getDb: function() {
    return dbConnexion;
  }
};
