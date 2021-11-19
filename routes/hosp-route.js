const express = require('express');
const {addHospital,
        getAllHospital
      } = require('../controller/hospital-controller');

const router = express.Router();

router.post('/post', addHospital);
router.get('/getall', getAllHospital);


module.exports = {
    routes: router
}