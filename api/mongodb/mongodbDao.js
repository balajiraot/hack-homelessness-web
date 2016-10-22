

const mongoDb ={}


mongoDb.save = (obj, collectionName, callback)=>{
  const db = process.env.db
  console.log(db)
  const collection = db.collection[collectionName]
  collection.insertOne(obj,(err,results)=>{
    if(err){
      console.error("Error while saying obj", err)
    }
    callback(err,results)
  })
}

module.exports = mongoDb
