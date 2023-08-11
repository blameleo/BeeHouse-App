const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  agencyName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  location: { type: String },
  type: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("users", UserSchema);
// console.log(UserModel);

module.exports = UserModel;
// module.exports = UserModel;
