const express = require('express');
const { getBalances } = require('../controllers/balanceController');
const router = express.Router();

router.get('/', getBalances);

module.exports = router;
