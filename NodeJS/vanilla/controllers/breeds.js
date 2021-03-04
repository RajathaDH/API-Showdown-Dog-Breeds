const Breed = require('../models/Breed');

const { getBodyData } = require('../utils');

// get all breeds
async function getBreeds(req, res) {
    try {
        const breeds = await Breed.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(breeds));
    } catch (err) {
        console.log(err);
    }
}

// get a single breed by id
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

async function updateBreed(req, res, id) {
    try {
        const existingBreed = await Breed.findById(id);

        if (existingBreed) {
            const body = await getBodyData(req);

            const { breedName, info } = JSON.parse(body);

            const breed = {
                breedName: breedName || existingBreed.breedName,
                info: info || existingBreed.info
            };

            const updatedBreed = await Breed.update(id, breed);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(updatedBreed));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Breed not found' }));
        }
    } catch (err) {
        console.log(err);
    }
}

async function deleteBreed(req, res, id) {
    try {
        const breed = await Breed.findById(id);

        if (breed) {
            await Breed.remove(id);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: `Breed ${id} has been removed` }));
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
    getBreed,
    createBreed,
    updateBreed,
    deleteBreed
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