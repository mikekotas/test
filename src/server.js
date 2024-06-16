const express = require('express');
const path = require('path');
const sum = require('./sum');
require('dotenv').config() 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/sum', (req, res) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    res.json({ result: sum(a, b) });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;