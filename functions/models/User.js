const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create the User Schema.
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  menu: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("User", UserSchema);
