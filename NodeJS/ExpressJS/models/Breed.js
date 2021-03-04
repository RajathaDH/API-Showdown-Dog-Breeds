const fs = require('fs');

let breedsData = require('../../breedsData.json');

// get all breeds
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(breedsData);
    });
}

// get breed by id
function findById(id) {
    return new Promise((resolve, reject) => {
        const breed = breedsData.find((b) => b.id == id);

        resolve(breed);
    });
}

// add a new breed
function create(breed) {
    return new Promise((resolve, reject) => {
        const id = breedsData.length + 1; // get new id, length of array + 1

        const newBreed = { id: id.toString(), ...breed };
        breedsData.push(newBreed);

        writeFile('../breedsdata.json', breedsData);

        resolve(newBreed);
    });
}

// update an existing breed
function update(id, breed) {
    return new Promise((resolve, reject) => {
        const index = breedsData.findIndex((b) => b.id == id);

        breedsData[index] = { id, ...breed };

        writeFile('../breedsdata.json', breedsData);

        resolve(breedsData[index]);
    });
}

// remove a breed
function remove(id) {
    return new Promise((resolve, reject) => {
        breedsData = breedsData.filter(breed => breed.id != id);

        writeFile('../breedsdata.json', breedsData);

        resolve();
    });
}

// helper function to write JSON data to file
function writeFile(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 4), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}