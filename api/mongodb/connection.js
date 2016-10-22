
const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGODB_URI

const connectMongodb =()=>{
  MongoClient.connect(url, function(err, db) {
    if(err){
      console.error(`Unable to logic database for url ${url}`, err)
    }
    console.log("Connected successfully to server");
    process.env.db = db;
  });
}

module.exports =connectMongodb;
