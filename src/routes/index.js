const express = require('express');
const router = express.Router();
const chuckNorrisRoutes = require('./chuckNorrisRoutes');

router.use('/chuck-norris', chuckNorrisRoutes);

module.exports = router;
