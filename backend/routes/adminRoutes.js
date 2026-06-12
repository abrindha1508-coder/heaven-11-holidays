const express = require('express');
const router = express.Router();
const { verifyKey, exportData } = require('../controllers/adminController');

// Verify admin key
router.post('/verify', verifyKey);

// Export data based on type (users, contacts, enquiries, all)
router.get('/export/:type', exportData);

module.exports = router;
