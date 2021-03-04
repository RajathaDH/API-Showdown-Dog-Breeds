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

module.exports = {
    getBreeds
}