const bcrypt = require('bcrypt');

// In-memory user store (replace with DB in production)
const users = [];

async function registerUser(username, password) {
  const existing = users.find(u => u.username === username);
  if (existing) throw new Error('User already exists');
  const hash = await bcrypt.hash(password, 10);
  const user = { username, password: hash };
  users.push(user);
  return { username };
}

async function authenticateUser(username, password) {
  const user = users.find(u => u.username === username);
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;
  return { username };
}

module.exports = { registerUser, authenticateUser }; 