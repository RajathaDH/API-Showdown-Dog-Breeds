const fs = require('fs');

function writeFile(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 4), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function getBodyData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';

            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', () => {
                resolve(body);
            });
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    writeFile,
    getBodyData
}