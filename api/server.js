// BUILD YOUR SERVER HERE
const express = require('express');
const server = express()
const Users = require('./users/model');

server.use(express.json())

// endpoints
server.get('/', (req, res) => {
    res.send({message: 'Welcome to the API home'})
})

// get /api/users
server.get('/api/users', async (req, res) => {
    try {
        const getAllUsers = await Users.find()
        res.status(200).json(getAllUsers)
    } catch (error) {
        res.status(500).json({
            message: 'The users information could not be retrieved'
        })
    }
})

// get /api/users/:id
server.get('/api/users/:id', async (req, res) => {
    try {
        const getUser = await Users.findById(req.params.id)
        if (!getUser) {
            res.status(404).json({message: 'The user with the specified ID does not exist'})
        } else {
            res.status(200).json(getUser)
        }
    } catch (error) {
        res.status(500).json({
            message: 'The user information could not be retrieved'
        })
    }
})

// post /api/users

// put /api/users/:id

// delete /api/users/:id


//user schema
// {
//     id: "a_unique_id", // String, required
//     name: "Jane Doe",  // String, required
//     bio: "Having fun", // String, required
//   }

module.exports = server; // EXPORT YOUR SERVER instead of {}
