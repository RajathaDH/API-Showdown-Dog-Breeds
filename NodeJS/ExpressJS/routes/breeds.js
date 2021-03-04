const express = require('express');

const Breed = require('../models/Breed');

const router = express.Router();

// get all breeds
router.get('/', async (req, res) => {
    const breeds = await Breed.findAll();

    res.status(200).json(breeds);
});

// get a single breed by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    
    const breed = await Breed.findById(id);

    if (breed) {
        res.status(200).json(breed);
    } else {
        res.status(404).json({ message: `Breed with id ${id} not found.` });
    }
});

module.exports = router;