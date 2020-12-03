const server = require('./database/server')


const PORT =  3333;
server.listen(PORT, () => {
    console.log(`
        *** Hello! I am listening on port ${PORT} ***
    `)
});