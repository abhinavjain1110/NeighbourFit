import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, ThemeProvider, createTheme, CssBaseline, Link } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';
import Preferences from './pages/Preferences';
import Results from './pages/Results';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#49a09d' },
    secondary: { main: '#fed6e3' },
    background: {
      default: '#181c24',
      paper: '#232837',
    },
    text: {
      primary: '#f5f6fa',
      secondary: '#b2becd',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
});

function Home() {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h3" mb={2} sx={{ fontWeight: 700, color: 'primary.main' }}>Welcome to NeighborFit</Typography>
        <Typography variant="body1">Find your ideal neighborhood based on your lifestyle preferences. Register or log in to get started!</Typography>
      </Box>
    </Container>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{
      py: 2,
      px: 2,
      mt: 'auto',
      background: 'linear-gradient(90deg, #232837 0%, #181c24 100%)',
      color: 'text.secondary',
      textAlign: 'center',
      boxShadow: '0 -2px 8px rgba(73,160,157,0.08)',
      position: 'relative',
      width: '100%',
    }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} NeighborFit &mdash; Crafted with ❤️ for your next home
      </Typography>
      <Box mt={1}>
        <Link href="/" color="inherit" underline="hover" sx={{ mx: 1 }}>Home</Link>
        <Link href="/preferences" color="inherit" underline="hover" sx={{ mx: 1 }}>Preferences</Link>
        <Link href="/results" color="inherit" underline="hover" sx={{ mx: 1 }}>Results</Link>
      </Box>
    </Box>
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <AppBar position="static" elevation={2} sx={{ background: 'linear-gradient(90deg, #232837 0%, #49a09d 100%)' }}>
            <Toolbar>
              <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
                <span style={{ color: '#fed6e3' }}>Neighbor</span><span style={{ color: '#49a09d' }}>Fit</span>
              </Typography>
              <Button color="inherit" href="/" sx={{ mx: 1, fontWeight: 500, '&:hover': { color: '#fed6e3' } }}>Home</Button>
              {token && <Button color="inherit" href="/preferences" sx={{ mx: 1, fontWeight: 500, '&:hover': { color: '#fed6e3' } }}>Preferences</Button>}
              {token && <Button color="inherit" href="/results" sx={{ mx: 1, fontWeight: 500, '&:hover': { color: '#fed6e3' } }}>Results</Button>}
              {token ? (
                <Button color="inherit" onClick={handleLogout} sx={{ mx: 1, fontWeight: 500, '&:hover': { color: '#fed6e3' } }}>Logout</Button>
              ) : (
                <>
                  <Button color="inherit" href="/login" sx={{ mx: 1, fontWeight: 500, '&:hover': { color: '#fed6e3' } }}>Login</Button>
                  <Button color="inherit" href="/register" sx={{ mx: 1, fontWeight: 500, '&:hover': { color: '#fed6e3' } }}>Register</Button>
                </>
              )}
            </Toolbar>
          </AppBar>
          <Box flex={1} display="flex" flexDirection="column">
            <Routes>
              <Route path="/login" element={token ? <Navigate to="/preferences" /> : <Login onLogin={handleLogin} />} />
              <Route path="/register" element={token ? <Navigate to="/preferences" /> : <Register />} />
              <Route path="/preferences" element={token ? <Preferences token={token} /> : <Navigate to="/login" />} />
              <Route path="/results" element={token ? <Results token={token} /> : <Navigate to="/login" />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
