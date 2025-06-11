const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  phoneNumber: { type: Number },
  imageUrl: { type: String },
});

// ✅ Prevent OverwriteModelError
const User = mongoose.models.users || mongoose.model("users", UserSchema);

module.exports = User;
