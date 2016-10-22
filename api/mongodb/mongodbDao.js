

const mongoDb ={}


mongoDb.save = (obj, collectionName, callback)=>{
  const db = global.db
  const collection = db.collection(collectionName)
  collection.insertOne(obj,(err,results)=>{
    if(err){
      console.error("Error while saying obj", err)
    }
    console.log("record insert success"+results)
    callback(err,results)
  })
}

module.exports = mongoDb
