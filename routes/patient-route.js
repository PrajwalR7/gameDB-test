const express = require('express');
const {addPatient,
        getAllPatient
      } = require('../controller/patient-controller');

const router = express.Router();

router.post('/post', addPatient);
router.get('/getall', getAllPatient);


module.exports = {
    routes: router
}