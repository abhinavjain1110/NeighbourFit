import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import './App.css';
import Preferences from './pages/Preferences';
import Results from './pages/Results';

function Home() {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h3" mb={2}>Welcome to NeighborFit</Typography>
        <Typography variant="body1">Find your ideal neighborhood based on your lifestyle preferences. Register or log in to get started!</Typography>
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
          <Button color="inherit" href="/">Home</Button>
          {token && <Button color="inherit" href="/preferences">Preferences</Button>}
          {token && <Button color="inherit" href="/results">Results</Button>}
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
        <Route path="/login" element={token ? <Navigate to="/preferences" /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={token ? <Navigate to="/preferences" /> : <Register />} />
        <Route path="/preferences" element={token ? <Preferences token={token} /> : <Navigate to="/login" />} />
        <Route path="/results" element={token ? <Results token={token} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
