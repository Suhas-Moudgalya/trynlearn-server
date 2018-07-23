var mongoose = require('mongoose');

var Message = mongoose.model('messages', {
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
});

module.exports = { Message };