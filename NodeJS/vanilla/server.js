const http = require('http');

const { getBreeds, getBreed, createBreed } = require('./controllers/breeds');

const server = http.createServer((req, res) => {
    if (req.url == '/api/breeds' && req.method == 'GET') {
        getBreeds(req, res);
    } else if (req.url.match(/\/api\/breeds\/([0-9]+)/) && req.method == 'GET') {
        const id = req.url.split('/')[3]; // /api/breeds/1 ['', 'api', 'breeds', '1']

        getBreed(req, res, id);
    } else if (req.url == '/api/breeds' && req.method == 'POST') {
        createBreed(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//res.statusCode = 200;
//res.setHeader('Content-Type', 'text/html');
//res.write('<h1>Hello</h1>');
//res.end();

//res.writeHead(200, { 'Content-Type': 'application/json' });
//res.end(JSON.stringify(breeds));