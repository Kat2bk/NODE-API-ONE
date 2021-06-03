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
        if (getAllUsers) {
        res.status(200).json(getAllUsers)
        } else {
            res.status(404).json({message: 'unable to find user database'})
        }
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
server.post('/api/users', async (req, res) => {
    try {
        const {name, bio} = req.body;
        if (!name|| !bio) {
            res.status(400).json({
                message: 'Please provide name and bio for the user'
            })
        } else {
        const newUser = await Users.insert(req.body);
            console.log(newUser)
            res.status(201).json(newUser)
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: 'There was an error while saving the user to the database'
        })
    }
})
// put /api/users/:id
server.put('/api/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {name, bio} = req.body;
        const updateUser = await Users.update(id, {name, bio});
        
        if (!updateUser) {
            res.status(404).json({
                message: 'The user with the specified ID does not exist'
            })
        } else if (!name || !bio) {
            res.status(400).json({
                message: 'Please provide name and bio for the user'
            })
        } else {
            console.log(updateUser)
            res.status(200).json(updateUser)
        }
    } catch (error) {
        res.status(500).json({
            message: 'The user information could not be modified'
        })
    }
})
// delete /api/users/:id
server.delete('/api/users/:id', async (req, res) => {
    try {
        const deleteUser = await Users.remove(req.params.id)
        if (!deleteUser) {
            res.status(404).json({ message: 'The user with the specified ID does not exist'})
        } else {
            res.status(204).json(deleteUser)
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message: 'could not remove this user'})
    }
})



//user schema
// {
//     id: "a_unique_id", // String, required
//     name: "Jane Doe",  // String, required
//     bio: "Having fun", // String, required
//   }

module.exports = server; // EXPORT YOUR SERVER instead of {}
