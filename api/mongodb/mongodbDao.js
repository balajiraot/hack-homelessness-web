const ObjectID = require('mongodb').ObjectID;
const mongoDb ={}


mongoDb.save = (obj, collectionName, callback) => {
  const db = global.db;
  const collection = db.collection(collectionName)

  obj._id = new ObjectID.createFromHexString(obj._id);

  collection.save(obj,(err,results)=>{
    if(err){
      console.error("Error while saying obj", err)
    }else{
      callback(err,{_id:obj._id})
    }
  })
}

/* $text fields = {
*   firstName:
*   lastName
*   dob
*   SSN
*   location
*   organization
* }
*/
{}
mongoDb.getClientBy = (queryParams, collectionName, callback) => {
  const db = global.db;
  const clientCollection = db.collection(collectionName);

  clientCollection.find(queryParams, (err,results)=>{
    if(!err){
      results.toArray(callback);
    }else {
      callback(err);
    }
  });
}
module.exports = mongoDb
