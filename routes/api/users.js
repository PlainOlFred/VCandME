const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')

// Model
const User = require('../../models/User')

// @route   POST api/users
// @desc    Register Users
// Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // Data Validation
  if(!name || !email || !password) {
    return res.status(400).json({message: 'Please enter all fields'});
  }

  // User Validation
  User.findOne({email})
    .then(user => {

      if(user) {
        return res.status(400).json({message: 'Email is already in use'})
      }

      const newUser = new User({
        name,
        email,
        password
      });

      // Password Hash w/ salt
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {

              jwt.sign(
                {id:user.id}, 
                config.get('jwtSecret'), 
                {expiresIn: 3600},
                (err, token) => {
                  if (err) throw err;
                  res.json({
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }, 
                  token
                })
                })
            })
        })
      })
    })
});






module.exports = router;