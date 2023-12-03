const express = require('express');

const { getCVData, updateCVData, addCVData } = require('../controller/cv-details-provider');

const router = express.Router();

router.route('/:id').get(getCVData).put(updateCVData);
router.route('/').post(addCVData);

module.exports = router;