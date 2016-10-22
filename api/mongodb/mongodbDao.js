

const mongoDb ={}


mongoDb.save = (obj, collectionName, callback) => {
  const db = global.db
  const collection = db.collection(collectionName)
  collection.insertOne(obj,(err,results)=>{
    if(err){
      console.error("Error while saying obj", err)
    }
    callback(err,results)
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
  const db = global.db
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
