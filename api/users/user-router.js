const router = require('express').Router();
const dbUser = require('./user-model.js');



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
    
});

router.get('/id/:id', async (req, res) => {
    const {id} = req.params;
    try {
      const user = await dbUser.findById(id);
      if (!user) {
        res.status(400).json({
            message: `User not found`,
        });

      } else {
        res.status(200).json(user);
      };
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `server error`,
            error: err
        });
    }
    
});

router.get('/name/:username', async (req, res) => {
    const {username} = req.params;
    try {
      const user = await dbUser.findByUsername(username);
      if (!user) {
        res.status(400).json({
            message: `Username not found`,
        });

      } else {
        res.status(200).json(user);
      };
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `server error`,
            error: err
        });
    }
    
});





module.exports =  router;