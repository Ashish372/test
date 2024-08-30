import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import DonationIcon from '@mui/icons-material/LocalOffer';
import EventIcon from '@mui/icons-material/Event';
import InfoIcon from '@mui/icons-material/Info';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #ff5a5f 30%, #ff7879 90%)', // Gradient background
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)', // Enhanced shadow
});

const Title = styled(Typography)({
  flexGrow: 1,
  fontWeight: 'bold',
  color: '#ffffff', // White color
  fontSize: '1.5rem',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', // Subtle text shadow
  '@media (max-width: 600px)': {
    fontSize: '1.2rem', // Smaller font size for mobile
  },
});

const LinkButton = styled(Button)({
  color: '#ffffff', // White color
  textTransform: 'none',
  fontSize: '1.3rem',
  fontWeight: 600, // Slightly bolder text
  margin: '0 12px', // Add more spacing between buttons
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(255, 90, 95, 0.1)', // Lighter shade on hover
    transition: 'background-color 0.3s ease',
  },
  display: 'flex',
  alignItems: 'center',
  '&.active': {
    borderBottom: '2px solid #ffffff', // Highlight the active link
  },
  '@media (max-width: 600px)': {
    fontSize: '0.9rem', // Smaller font size for mobile
    margin: '0 8px', // Adjust spacing for mobile
  },
});

const Icon = styled('span')({
  marginRight: '10px', // Space between icon and text
  fontSize: '1.6rem', // Larger icon size
  '@media (max-width: 600px)': {
    fontSize: '1.2rem', // Adjust icon size for mobile
  },
});

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Title variant="h4">The Omega Community Foundation</Title>
        <LinkButton 
          component={Link} 
          to="/" 
          className={currentPath === '/' ? 'active' : ''}
        >
          <Icon><HomeIcon /></Icon>
          Home
        </LinkButton>
        <LinkButton 
          component={Link} 
          to="/donate" 
          className={currentPath === '/donate' ? 'active' : ''}
        >
          <Icon><DonationIcon /></Icon>
          Donate
        </LinkButton>
        <LinkButton 
          component={Link} 
          to="/event-info" 
          className={currentPath === '/event-info' ? 'active' : ''}
        >
          <Icon><EventIcon /></Icon>
          Event Info
        </LinkButton>
        <LinkButton 
          component={Link} 
          to="/about" 
          className={currentPath === '/about' ? 'active' : ''}
        >
          <Icon><InfoIcon /></Icon>
          About
        </LinkButton>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
