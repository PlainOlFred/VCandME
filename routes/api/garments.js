const express = require('express');
const router = express.Router();

// Model
const Garment = require('../../models/Garment')

// @route   GET api/garment
// @desc    Get all garments for user
// Public
router.get('/', (req, res) => {
  Garment.find()
    .then( garments => res.json(garments))
});


// @route   POST api/garment
// @desc    Create garments for user
// Public
router.post('/', (req, res) => {
 const newGarment = new Garment({
   brand: req.body.brand,
   color: req.body.color,
   picture: req.body.picture,
   type: req.body.type
 })

 newGarment.save()
  .then( garment => res.json(garment))

});

module.exports = router;