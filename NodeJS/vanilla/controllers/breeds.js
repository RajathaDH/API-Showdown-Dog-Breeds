const Breed = require('../models/Breed');

const { getBodyData } = require('../utils');

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

async function createBreed(req, res) {
    try {
        const body = await getBodyData(req);

        const { breedName, info } = JSON.parse(body);
        
        const breed = {
            breedName,
            info
        };

        const newBreed = await Breed.create(breed);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newBreed));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getBreeds,
    getBreed,
    createBreed
}

/*async function createBreed(req, res) {
    try {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            const { breedName, info } = JSON.parse(body);

            const breed = {
                breedName,
                info
            };
            
            const newBreed = await Breed.create(breed);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(newBreed));
        });
    } catch (err) {
        console.log(err);
    }
}*/