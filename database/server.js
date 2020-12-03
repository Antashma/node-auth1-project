const express = require('express');
const server = express();

server.use(express.json())

server.get('', (req, res) => {
    res.send(`
        <h1>Welcome to Sam G's Node Auth 1 Project</h1>
        <h2>Endpoints</h2>
        <ul>
            <li>POST /api/register <br />
            Creates a user using the information sent inside the body of the request. <strong>Hashes the password</strong> before saving the user to the database.</li>
            <li>POST /api/login	<br />
            Uses the credentials sent inside the body to authenticate the user. On successful login, creates a new session for the user and sends back a 'Logged in' message and a cookie that contains the user id. If login fails, responds with the correct status code and the message: <em>'You shall not pass!'</em></li>
            <li>GET	/api/users	<br />
            If the user is logged in, responds with an array of all the users contained in the database. If the user is not logged in responds with the correct status code and the message: <em>'You shall not pass!'</em>.</li>
        </ul>
        <p>Includes support for sessions and cookies that uses them to keep a record of logged in users across requests.</p>
    `)
})

module.exports = server;