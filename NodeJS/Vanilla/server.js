const http = require('http');

const { getBreeds, getBreed, createBreed, updateBreed, deleteBreed } = require('./controllers/breeds');

const server = http.createServer((req, res) => {
    if (req.url == '/api/breeds' && req.method == 'GET') {
        getBreeds(req, res);
    } else if (req.url.match(/\/api\/breeds\/([0-9]+)/) && req.method == 'GET') {
        const id = req.url.split('/')[3]; // /api/breeds/1 ['', 'api', 'breeds', '1']

        getBreed(req, res, id);
    } else if (req.url == '/api/breeds' && req.method == 'POST') {
        createBreed(req, res);
    } else if (req.url.match(/\/api\/breeds\/([0-9]+)/) && req.method == 'PUT') {
        const id = req.url.split('/')[3]; // /api/breeds/1 ['', 'api', 'breeds', '1']

        updateBreed(req, res, id);
    } else if (req.url.match(/\/api\/breeds\/([0-9]+)/) && req.method == 'DELETE') {
        const id = req.url.split('/')[3]; // /api/breeds/1 ['', 'api', 'breeds', '1']

        deleteBreed(req, res, id);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));