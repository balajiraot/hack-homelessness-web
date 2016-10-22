const router = require('express').Router();
const mongodbDao = require('../mongodb/mongodbDao')
router.post("/", (req,res)=>{
    mongodbDao.save({test:"test"},"seeker",(err, results)=>{
        if(err){
            res.error(err);
        }else{
            res.end(results);
        }

    })
})

module.exports = router