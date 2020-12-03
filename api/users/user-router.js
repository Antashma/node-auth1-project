const router = require('express').Router();
const dbUser = require('./user-model.js')


router.get('/', async (req, res) => {
    try {
      const users = await dbUser.find();
      res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `server error`,
            error: err
        });
    }
    
})

module.exports =  router;