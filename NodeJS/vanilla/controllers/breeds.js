const Breed = require('../models/Breed');

async function getBreeds(req, res) {
    try {
        const breeds = await Breed.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(breeds));
    } catch (err) {
        console.log(err);
    }
}

async function getBreed(req, res, id) {
    try {
        const breed = await Breed.findById(id);

        if (breed) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(breed));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Breed not found' }));
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getBreeds,
    getBreed
}