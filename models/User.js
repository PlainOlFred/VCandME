const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  date_added: {
    type: Date,
    default: Date.nae
  }

})

module.exports =User = mongoose.model('user', UserSchema);