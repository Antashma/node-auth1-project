const router = require('express').Router();
const dbUser = require('../api/users/user-model.js');
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password =  hash;
    try {
        
      const newUser = await dbUser.register(user);
      res.status(201).json(newUser);
      
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `server error`,
            error
        });
    }
    
})

router.post('/login', async (req, res) => {
    const cred = req.body;
    const foundUser = await dbUser.login(cred.username);
    try {
        if (!foundUser || !bcrypt.compareSync(cred.password, foundUser.password )) {
            res.status(403).json({
                message: `You shall not pass!`
            })
        } else {
            req.session.user = foundUser.id;
            res.status(201).json({
                message: `Welcome, ${foundUser.username}!`
            }); 
        }
      
      
    } catch (error) {

        console.log(error);
        res.status(500).json({
            message: `server error`,
            error
        });

    }
    
})




module.exports = router;