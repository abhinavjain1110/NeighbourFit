import React, { useState } from 'react';
import { Box, Typography, Container, Slider, Button, Stepper, Step, StepLabel, Avatar, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import SchoolIcon from '@mui/icons-material/School';

const preferenceFields = [
  { key: 'safety', label: 'Safety', icon: <SecurityIcon /> },
  { key: 'affordability', label: 'Affordability', icon: <AttachMoneyIcon /> },
  { key: 'amenities', label: 'Amenities', icon: <LocalCafeIcon /> },
  { key: 'walkability', label: 'Walkability', icon: <DirectionsWalkIcon /> },
  { key: 'schools', label: 'Schools', icon: <SchoolIcon /> },
];

const defaultPrefs = {
  safety: 5,
  affordability: 5,
  amenities: 5,
  walkability: 5,
  schools: 5,
};

const defaultMinScore = 0;

function Preferences({ token }) {
  const [preferences, setPreferences] = useState(defaultPrefs);
  const [activeStep, setActiveStep] = useState(0);
  const [minScore, setMinScore] = useState(defaultMinScore);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChange = (key) => (e, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (activeStep < preferenceFields.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      navigate('/results', { state: { preferences, minScore } });
    }
  };
  
  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const { key, label, icon } = preferenceFields[activeStep];

  return (
    <Container maxWidth="sm" sx={{ bgcolor: theme.palette.background.paper, borderRadius: 3, boxShadow: 3, mt: 6, p: 3 }}>
      <Box mt={2}>
        <Typography variant="h4" mb={2} color="primary" sx={{ fontWeight: 700 }}>Tell Us Your Preferences</Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4, background: 'transparent', p: 1 }}>
          {preferenceFields.map((field) => (
            <Step key={field.key}>
              <StepLabel icon={<Avatar sx={{ bgcolor: theme.palette.primary.main }}>{field.icon}</Avatar>}>{field.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box textAlign="center" mb={2}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 56, height: 56, margin: '0 auto' }}>{icon}</Avatar>
          <Typography variant="h6" mt={2}>{label}: {preferences[key]}</Typography>
        </Box>
        <Slider
          value={preferences[key]}
          min={0}
          max={10}
          step={1}
          onChange={handleChange(key)}
          valueLabelDisplay="auto"
          marks
          sx={{ color: theme.palette.primary.main, mb: 4 }}
        />
        {activeStep === preferenceFields.length - 1 && (
          <Box mb={4}>
            <Typography variant="subtitle1" mb={1} color="secondary">Minimum Score for Results: {minScore}</Typography>
            <Slider
              value={minScore}
              min={0}
              max={50}
              step={1}
              onChange={(_, value) => setMinScore(value)}
              valueLabelDisplay="auto"
              marks
              sx={{ color: theme.palette.secondary.main }}
            />
          </Box>
        )}
        <Box display="flex" justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined" color="secondary">Back</Button>
          <Button onClick={handleNext} variant="contained" color="primary">
            {activeStep === preferenceFields.length - 1 ? 'See Results' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Preferences; 