const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

const breedsRouter = require('./routes/breeds');

app.use('/api/breeds', breedsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));