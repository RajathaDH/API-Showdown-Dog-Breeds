const fs = require('fs');

function writeFile(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 4), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    writeFile
}