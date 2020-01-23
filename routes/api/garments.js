const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Model
const Garment = require('../../models/Garment')

// @route   GET api/garments
// @desc    Get all garments for user
// Public
router.get('/', (req, res) => {
  Garment.find()
    .then( garments => res.json(garments))
});


// @route   POST api/garments
// @desc    Create garment for user
// Private
router.post('/', auth,  (req, res) => {
 const newGarment = new Garment({
   brand: req.body.brand,
   color: req.body.color,
   picture: req.body.picture,
   type: req.body.type
 })

 newGarment.save()
  .then( garment => res.json(garment))

});

// @route   DELETE api/garments
// @desc    Delete garment for user
// Private
router.delete('/:id', auth,  (req, res) => {
  Garment.findById(req.params.id)
  .then( garment => garment.remove()
    .then(()=>res.json({removed: true}))
    .catch(err =>res.status(404).json({removed: false})))
});

module.exports = router;