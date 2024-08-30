import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/event-info');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 600px)': {
          height: '100vh', // Ensure the height is full viewport height on mobile
        },
      }}
    >
      <ReactPlayer
        url="https://youtu.be/LnD0dY2AaD8?si=YTUDknuXUQctzLTJ"
        playing
        loop
        muted={false} // Ensure the video is not muted
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Overlay to enhance text readability
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          color: '#fff',
          p: 3,
          maxWidth: '80%',
          mx: 'auto',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Haettenschweiler',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4rem' }, // Adjust font size for all screen sizes
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for better readability
            color: 'yellow',
          }}
        >
          The Harlem Renaissance, a New Year's Eve with Vaughn Willis and Ear Candy
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Haettenschweiler',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '2rem' }, // Responsive font sizes
            lineHeight: 1.5,
            mb: 4,
          }}
        >
          Join us in making a difference by contributing to our cause.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleButtonClick}
          sx={{
            backgroundColor: '#ff5a5f',
            mt: 2,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            transition: 'transform 0.3s ease',
            '&:hover': {
              backgroundColor: '#e04f53',
              transform: 'scale(1.05)',
            },
            padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' }, // Responsive padding for the button
          }}
        >
          Get Involved
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
