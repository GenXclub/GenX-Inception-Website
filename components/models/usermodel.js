const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({ 
  name: {
    type:String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the user model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;