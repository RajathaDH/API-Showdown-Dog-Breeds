const breedsData = require('../../breedsData.json');

const { writeFile } = require('../utils');

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

function create(breed) {
    return new Promise((resolve, reject) => {
        const id = breedsData.length + 1; // get new id, length of array + 1

        const newBreed = { id: id.toString(), ...breed };
        breedsData.push(newBreed);

        writeFile('../breedsdata.json', breedsData);

        resolve(newBreed);
    });
}

module.exports = {
    findAll,
    findById,
    create
}