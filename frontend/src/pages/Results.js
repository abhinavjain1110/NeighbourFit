import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, CircularProgress, Alert, Card, CardContent, CardMedia, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

function Results({ token }) {
  const location = useLocation();
  const navigate = useNavigate();
  const preferences = location.state?.preferences;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!preferences) {
      navigate('/preferences');
      return;
    }
    let isMounted = true;
    async function fetchResults() {
      setLoading(true);
      setError('');
      try {
        const res = await axios.post('http://localhost:3001/api/match', preferences, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (isMounted) {
          if (Array.isArray(res.data)) {
            setResults(res.data);
          } else if (res.data && Array.isArray(res.data.results)) {
            setResults(res.data.results);
          } else {
            setResults([]);
          }
        }
      } catch (e) {
        if (isMounted) setError('Error fetching results');
      }
      if (isMounted) setLoading(false);
    }
    fetchResults();
    return () => { isMounted = false; };
  }, [preferences, token, navigate]);

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" mb={2} color="primary">Neighborhood Results</Typography>
        {loading && <CircularProgress />}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {!loading && results.length === 0 && <Typography>No results found.</Typography>}
        <List>
          {results.map((n) => (
            <Card key={n._id} sx={{ mb: 3, background: '#f5faff', boxShadow: 3 }}>
              {n.image && (
                <CardMedia
                  component="img"
                  height="180"
                  image={n.image}
                  alt={n.name}
                  style={{ objectFit: 'cover' }}
                />
              )}
              <CardContent>
                <Typography variant="h5" color="secondary">{n.name}</Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>{n.description}</Typography>
                <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <ListItem><ListItemText primary={`Safety: ${n.safety}`} /></ListItem>
                  <ListItem><ListItemText primary={`Affordability: ${n.affordability}`} /></ListItem>
                  <ListItem><ListItemText primary={`Amenities: ${n.amenities}`} /></ListItem>
                  <ListItem><ListItemText primary={`Walkability: ${n.walkability}`} /></ListItem>
                  <ListItem><ListItemText primary={`Schools: ${n.schools}`} /></ListItem>
                  <ListItem><ListItemText primary={`Score: ${n.score}`} /></ListItem>
                </List>
              </CardContent>
            </Card>
          ))}
        </List>
        <Button variant="contained" color="primary" onClick={() => navigate('/preferences')}>Back to Preferences</Button>
      </Box>
    </Container>
  );
}

export default Results; 