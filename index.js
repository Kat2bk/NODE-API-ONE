const server = require('./api/server');

const port = 5000;

server.listen(port, () => {
    console.log(`\n server is running on port ${port} \n`)
})

// START YOUR SERVER HERE

// 1. if you do not have a gitignore (npx gitignore node)
// 2. set up your scripts in package.json "start" and "server"
// 3. set up your eslint (npx eslint --init)
// 4. require express
// 5. create your server, set it to express
// 6. create your port variable
// 7. server.use(express.json())
// 8. create the listener for your server
// 9. set up your endpoints with statusCodes
// 10. be sure to export your endpoints/server.js


