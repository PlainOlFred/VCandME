const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GarmentSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  picture: {
    type: String,
  },
  type: {
    type: String,
    enum: ['top', 'bottom', 'full']
  },
  dateAdded:{
    type: Date,
    default: Date.now
  }

})

module.exports = Garment = mongoose.model('garment', GarmentSchema);