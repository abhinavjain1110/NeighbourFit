const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

async function registerUser(username, password) {
  const existing = await User.findOne({ username });
  if (existing) throw new Error('User already exists');
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash });
  await user.save();
  return { username };
}

async function authenticateUser(username, password) {
  const user = await User.findOne({ username });
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;
  return { username };
}

module.exports = { registerUser, authenticateUser, User }; 