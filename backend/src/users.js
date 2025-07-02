const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  preferences: {
    safety: { type: Number, default: 5 },
    affordability: { type: Number, default: 5 },
    amenities: { type: Number, default: 5 },
    walkability: { type: Number, default: 5 },
    schools: { type: Number, default: 5 }
  }
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

async function getUserPreferences(username) {
  const user = await User.findOne({ username });
  if (!user) throw new Error('User not found');
  return user.preferences;
}

async function updateUserPreferences(username, preferences) {
  const user = await User.findOneAndUpdate(
    { username },
    { preferences },
    { new: true }
  );
  if (!user) throw new Error('User not found');
  return user.preferences;
}

module.exports = { registerUser, authenticateUser, User, getUserPreferences, updateUserPreferences }; 