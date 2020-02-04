const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  location: {
    type: String
  },
  date : Date
})

const OutfitSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  top: {
    type: Schema.Types.ObjectId,
    ref: 'garmet',
    required: true
  },
  bottom: {
    type: Schema.Types.ObjectId,
    ref: 'garment'
  },
  events: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'event'
    }]
  }
})

module.exports = Outfit = mongoose.model('outfit', OutfitSchema);