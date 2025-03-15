const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');

// Route for the travel page
router.get('/', travelController.showTravelPage);

module.exports = router;
