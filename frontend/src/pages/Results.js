import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, CircularProgress, Alert, Card, CardContent, CardMedia, List, ListItem, ListItemText, Button, useTheme } from '@mui/material';
import axios from 'axios';

function Results({ token }) {
  const location = useLocation();
  const navigate = useNavigate();
  const preferences = location.state?.preferences;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const theme = useTheme();

  // Calculate total score from preferences (same as backend)
  const totalScore = preferences
    ? (preferences.safety || 0) * (preferences.safety || 0)
      + (preferences.affordability || 0) * (preferences.affordability || 0)
      + (preferences.amenities || 0) * (preferences.amenities || 0)
      + (preferences.walkability || 0) * (preferences.walkability || 0)
      + (preferences.schools || 0) * (preferences.schools || 0)
    : 0;

  // Filter results by score > totalScore
  const filteredResults = results.filter((n) => n.score > totalScore);
  const resultsPerPage = 15;
  const pageCount = Math.ceil(filteredResults.length / resultsPerPage);
  const paginatedResults = filteredResults.slice((page - 1) * resultsPerPage, page * resultsPerPage);

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
        /* const res = await axios.post('http://localhost:3001/api/match', preferences, { */
        const res = await axios.post('https://neighbour-fit-one.vercel.app/api/match', preferences, {
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
    <Container maxWidth="md" sx={{ bgcolor: theme.palette.background.paper, borderRadius: 3, boxShadow: 3, mt: 6, p: 3 }}>
      <Box mt={2}>
        <Typography variant="h4" mb={2} color="primary" sx={{ fontWeight: 700 }}>Neighbourhood Results</Typography>
        {loading && <CircularProgress />}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {!loading && paginatedResults.length === 0 && <Typography>No results found.</Typography>}
        <List>
          {paginatedResults.map((n) => (
            <Card key={n._id} sx={{ mb: 3, background: theme.palette.background.default, boxShadow: 3, color: theme.palette.text.primary }}>
              {n.image && (
                <CardMedia
                  component="img"
                  height="250"
                  image={n.image}
                  alt={n.name}
                  style={{ objectFit: "scale-down" }}
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
        <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={2}>
          <Button
            variant="outlined"
            color="secondary"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>
          <Typography variant="body2">Page {page} of {pageCount}</Typography>
          <Button
            variant="outlined"
            color="secondary"
            disabled={page === pageCount || pageCount === 0}
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          >
            Next
          </Button>
        </Box>
        <Button variant="contained" color="primary" onClick={() => navigate('/preferences')} sx={{ mt: 2 }}>Back to Preferences</Button>
      </Box>
    </Container>
  );
}

export default Results; 