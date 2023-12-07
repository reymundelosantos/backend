const express = require('express');
const {
    getCategories,
    getJokes
} = require('../controllers/chuckNorrisController');
const router = express.Router();

router.get('/categories', getCategories);
router.get('/jokes', getJokes);

module.exports = router;
