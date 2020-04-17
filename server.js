const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'dist')));

server.get('/*', async (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

server.listen(3000, () => console.log('App Running on port 3000'));