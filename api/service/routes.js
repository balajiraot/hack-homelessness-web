'use strict'
const router = require('express').Router();
const mongodbDao = require('../mongodb/mongodbDao')
const COC_COLLECTION_NAME = "coc";
const SEEKER_COLLECTION_NAME = "seeker";


const handleResponse = (res) => (err, results) => {
    if (err) {
      res.error(err);
    } else {
      res.status(200);
      res.send(results);
    }
}

// TODO: iOS Endpoints
// ** POST - /save **
router.post("/seeker", (req, res) => {
    const body = req.body;

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

// TODO: End iOS Endpoints

// TODO: Web Endpoints
// ** GET - /recommendations **
router.get("/coc/client", (req, res) => {
  const { SSN } = req.query;
  const clientQueryParams = {
    SSN,
  };

  mongodbDao.getClientBy(clientQueryParams, COC_COLLECTION_NAME, handleResponse(res));
})

// ** POST - /coc/client
router.post("/coc/client", (req, res) => {
    const body = req.body;
    console.log(body);
    mongodbDao.save(body, COC_COLLECTION_NAME, handleResponse(res));
})

// TODO: End Web Endpoints

module.exports = router
