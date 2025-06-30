import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import './App.css';

const defaultPrefs = {
  safety: 5,
  affordability: 5,
  amenities: 5,
  walkability: 5,
  schools: 5,
};

function Dashboard({ token, onLogout }) {
  const [preferences, setPreferences] = useState(defaultPrefs);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3001/api/match', preferences, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResults(res.data);
    } catch (err) {
      alert('Error fetching results');
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" mb={2}>NeighborFit Dashboard</Typography>
        <form onSubmit={handleSubmit} className="prefs-form">
          {Object.keys(defaultPrefs).map((key) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
              <input
                type="range"
                min="0"
                max="10"
                name={key}
                value={preferences[key]}
                onChange={handleChange}
              />
              <span>{preferences[key]}</span>
            </div>
          ))}
          <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
            {loading ? 'Matching...' : 'Find Neighborhoods'}
          </Button>
        </form>
        <hr />
        <Typography variant="h5" mt={3}>Results</Typography>
        {results.length === 0 && <p>No results yet. Adjust your preferences and search!</p>}
        <ul className="results-list">
          {results.map((n) => (
            <li key={n.id} className="result-item">
              <Typography variant="h6">{n.name}</Typography>
              <p>{n.description}</p>
              <ul>
                <li>Safety: {n.safety}</li>
                <li>Affordability: {n.affordability}</li>
                <li>Amenities: {n.amenities}</li>
                <li>Walkability: {n.walkability}</li>
                <li>Schools: {n.schools}</li>
                <li><strong>Score: {n.score}</strong></li>
              </ul>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}

function App() {
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const handleLogin = (jwt) => {
    setToken(jwt);
    localStorage.setItem('token', jwt);
  };
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>NeighborFit</Typography>
          {token ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button color="inherit" href="/login">Login</Button>
              <Button color="inherit" href="/register">Register</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={token ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="/dashboard" element={token ? <Dashboard token={token} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
