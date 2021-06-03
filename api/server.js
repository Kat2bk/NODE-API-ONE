// BUILD YOUR SERVER HERE
const express = require('express');
const server = express()

server.use(express.json())

// endpoints
server.use('/', (req, res) => {
    res.send({message: 'Welcome to the API home'})
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
