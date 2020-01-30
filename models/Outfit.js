const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  top: {
    type: Schema.Types.ObjectId,
    required: true
  },
  bottom: {
    type: Schema.Types.ObjectId,
  },
  events: {
    type: [String]
  },
  people: {
    type: [String]
  }

  

})

module.exports = Outfit = mongoose.model('outfit', OutfitSchema);