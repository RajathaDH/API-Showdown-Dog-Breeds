const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello Breeds' });
});

module.exports = router;