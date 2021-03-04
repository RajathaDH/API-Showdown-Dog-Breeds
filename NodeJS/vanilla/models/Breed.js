const breedsData = require('../../breedsData.json');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(breedsData);
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const breed = breedsData.find((b) => b.id == id);

        resolve(breed);
    });
}

module.exports = {
    findAll,
    findById
}