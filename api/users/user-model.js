const db = require('../../database/db-config.js');

module.exports = {
    find,
    findById,
    findByUsername,
    register,
    login,
    //logout,
};

async function find() {
    try {
      return await db('users');  
    } catch (error) {
        throw error;
    };
};

async function findById(reqId) {
    try {
        const foundId = await db('users').where({id: reqId}).first()
        return foundId;
    } catch (error) {
        throw error;
    };
};

async function findByUsername(reqUsername) {
    const foundName = await db('users').where({username: reqUsername}).first();
    return foundName;
};

async function register(newUserData) {
    try {
        const ids = await db('users').insert(newUserData);
        return findById(ids);
    } catch (error) {
        throw error;
    };
};

async function login(loginData) {
};

