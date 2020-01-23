const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

// Model
const User = require('../../models/User')

// @route   POST api/auth
// @desc    Authenticate User
// Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Data Validation
  if(!email || !password) {
    return res.status(400).json({message: 'Please enter all fields'});
  }

  // User Validation
  User.findOne({email})
    .then(user => {
      if(!user) {
        return res.status(400).json({message: 'Not a valid User Email'})
      }
      // Vaildate Pass
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) {
            return res.status(400).json({message: 'Password does not match'});  
          }
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
});

// @route   GET api/auth/user
// @desc    Get user data
// Private  

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})







module.exports = router;