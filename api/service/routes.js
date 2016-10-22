const router = require('express').Router();
const mongodbDao = require('../mongodb/mongodbDao')


const handleResponse = (res)=>(err, results)=> {
    if (err) {
        res.error(err);
    } else {
        res.send(results);
    }
}

router.post("/seeker/", (req,res)=>{
    const body = req.body;
    console.log(body);
    mongodbDao.save(body,"seeker",handleResponse(res))

})

module.exports = router