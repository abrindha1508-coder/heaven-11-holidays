const express = require('express');
const router = express.Router();
const { submitEnquiry, getEnquiries } = require('../controllers/enquiryController');

// Define routes
router.route('/')
  .post(submitEnquiry)
  .get(getEnquiries);

module.exports = router;
