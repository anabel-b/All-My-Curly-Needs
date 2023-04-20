const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
    connectToServer: async (callback) => {
        await client.connect();
        console.log("Connected successfully to server");
        _db = client.db("Cluster0");
        console.log("Successfully connected to MongoDB");
    },
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
  getDb: function () {
    return _db;
  },
};