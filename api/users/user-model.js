const db = require('../../database/db-config.js');

module.exports = {
    find,
};

async function find() {
    return await db('users');
};