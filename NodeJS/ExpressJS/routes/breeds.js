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

// add a breed
router.post('/', async (req, res) => {
    const { breedName, info } = req.body;

    const breed = {
        breedName,
        info
    };

    const newBreed = await Breed.create(breed);

    res.status(201).json(newBreed);
});

// update an existing breed
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    
    const existingBreed = await Breed.findById(id);

    if (existingBreed) {
        const { breedName, info } = req.body;

        const breed = {
            breedName: breedName || existingBreed.breedName,
            info: info || existingBreed.info
        };

        const updatedBreed = await Breed.update(id, breed);

        res.status(200).json(updatedBreed);
    } else {
        res.status(404).json({ message: `Breed with id ${id} not found.` });
    }
});

// remove a breed
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    const breed = await Breed.findById(id);

    if (breed) {
        await Breed.remove(id);

        res.status(200).json({ message: `Breed ${id} has been removed.`});
    } else {
        res.status(404).json({ message: `Breed with id ${id} not found.` });
    }
});

module.exports = router;