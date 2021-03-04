const express = require('express');

const Breed = require('../models/Breed');

const router = express.Router();

// get all breeds
router.get('/', async (req, res) => {
    const breeds = await Breed.findAll();

    res.status(200).json(breeds);
});

module.exports = router;