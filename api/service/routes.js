'use strict'
const router = require('express').Router();
const mongodbDao = require('../mongodb/mongodbDao')
const COC_COLLECTION_NAME = "coc";
const SEEKER_COLLECTION_NAME = "seeker";


const handleResponse = (res) => (err, results) => {
    if (err) {
      res.error(err);
    } else {
      console.log('results = ', results);
      res.status(200);
      res.send(results);
    }
}

// TODO: iOS Endpoints
// ** POST - /save **
router.post("/seeker/save", (req, res) => {
    const body = req.body;
    console.log(body);
    mongodbDao.save(body, SEEKER_COLLECTION_NAME, handleResponse(res));
})

// ** GET - /contacts **
// Query Params
//  * firstName
//  * lastName
//  * dob
//  * SSN
//  * location
//  * organization
router.get("/seekers", (req, res) => {
  console.log("Get Seeker Contacts");
  const { firstName, lastName, dob, SSN, location, organization } = req.query;
  const seekerQueryParams = {
    firstName,
    lastName,
    dob,
    SSN,
    location,
    organization,
  };

  mongodbDao.getClientBy(seekerQueryParams, SEEKER_COLLECTION_NAME, handleResponse(res));
})
// ** PUT - /update **
// ** GET - /recommendations **
router.get("coc/client", (req, res) => {
  console.log("Get COC Clients");
  const { SSN } = req.query;

  const clientQueryParams = {
    SSN,
  };

  mongodbDao.getClientBy(clientQueryParams, COC_COLLECTION_NAME, handleResponse(res));
})

// TODO: Web Endpoints
// ** POST - /coc/client
router.post("/coc/client", (req, res) => {
    const body = req.body;
    console.log(body);
    mongodbDao.save(body, COC_COLLECTION_NAME, handleResponse(res));
})

module.exports = router
