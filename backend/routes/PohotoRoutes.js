const express = require('express');
const router = express.Router();

//controller

// Middlewares
const { photoInsertValidation } = require('../middlewares/photoValidation');
const authGuard = require('../middlewares/handleValidation');
const validate = require('../middlewares/handleValidation');
// Routes 

module.exports = router;