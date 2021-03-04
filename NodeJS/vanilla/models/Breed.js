const breedsData = require('../../breedsData.json');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(breedsData);
    });
}

module.exports = {
    findAll
}