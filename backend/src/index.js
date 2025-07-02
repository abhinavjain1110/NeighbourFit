require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
app.use(cors());
app.use(express.json());

const { getAllNeighborhoods, matchNeighborhoods } = require('./neighborhoods');
const { registerUser, authenticateUser } = require('./users');


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => res.send('NeighborFit API'));

// Auth endpoints
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await registerUser(username, password);
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await authenticateUser(username, password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'No token' });
  const token = auth.split(' ')[1];
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Get all neighborhoods (public)
// Get all neighborhoods (public)
app.get('/api/neighborhoods', async (req, res) => {
  try {
    const neighborhoods = await getAllNeighborhoods();
    res.json(neighborhoods);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch neighborhoods' });
  }
});

// Match neighborhoods (protected)
app.post('/api/match', authMiddleware, async (req, res) => {
  try {
    const preferences = req.body;
    const results = await matchNeighborhoods(preferences); // ✅ add await
    res.json(results);
  } catch (e) {
    res.status(500).json({ error: 'Failed to match neighborhoods' });
  }
});


app.listen(3001, () => console.log('API running on port 3001')); 