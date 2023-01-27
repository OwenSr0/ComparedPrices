const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', async function (next) {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (err) {
      next(err);
    }
  });


  userSchema.methods.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (err) {
      throw new Error(err);
    }
  };

const User = mongoose.model('User', userSchema);
module.exports = User;


