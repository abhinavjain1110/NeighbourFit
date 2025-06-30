const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
app.use(cors());
app.use(express.json());

const { getAllNeighborhoods, matchNeighborhoods } = require('./neighborhoods');
const { registerUser, authenticateUser } = require('./users');

const JWT_SECRET = 'neighborfit_secret'; // Use env var in production

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
app.get('/api/neighborhoods', (req, res) => {
  res.json(getAllNeighborhoods());
});

// Match neighborhoods (protected)
app.post('/api/match', authMiddleware, (req, res) => {
  const preferences = req.body;
  const results = matchNeighborhoods(preferences);
  res.json(results);
});

app.listen(3001, () => console.log('API running on port 3001')); 