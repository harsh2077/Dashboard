const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
// const { getData, getCountry, addData } = require('../controllers/dataController');

router.get('/data', dataController.getData);
router.post('/data', dataController.addData);
// router.get('/countries', dataController.getCountry);
module.exports = router;
// router.get('/data', getData);
// router.get('/countries', getCountry);
// router.post('/data', addData);
