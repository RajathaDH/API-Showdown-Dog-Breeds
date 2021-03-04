const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

const breedsRouter = require('./routes/breeds');

app.use('/api/breeds', breedsRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));