const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Model
const Outfit = require('../../models/Outfit')

// @route   GET api/outfits
// @desc    Get all outfits for user
// Public
router.get('/', (req, res) => {
  Outfit.find()
    .then( outfits => res.json(outfits))
});


// @route   POST api/outfits
// @desc    Create outfit for user
// Private
router.post('/', auth,  (req, res) => {
 const newOutfit = new Outfit({
   user: req.body.user,
   top: req.body.top,
   bottom: req.body.bottom,
 })

 newOutfit.save()
  .then( outfit => res.json(outfit))

});

// @route   DELETE api/outfits
// @desc    Delete outfit 
// Private
router.delete('/:id', auth,  (req, res) => {
  Outfit.findById(req.params.id)
  .then( outfit => outfit.remove()
    .then(()=>res.json({removed: true}))
    .catch(err =>res.status(404).json({removed: false})))
});

module.exports = router;