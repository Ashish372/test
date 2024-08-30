import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import DonationIcon from '@mui/icons-material/LocalOffer';
import EventIcon from '@mui/icons-material/Event';
import InfoIcon from '@mui/icons-material/Info';
import logo from '../utils/f-logo.png'; // Adjust the path based on your file structure

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ff5a5f 30%, #ff7879 90%)', // Gradient background
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)', // Enhanced shadow
  height: '60px', // Reduced height for AppBar
  [theme.breakpoints.down('sm')]: {
    height: '60px', // Consistent height on mobile
  },
}));

const Logo = styled('img')(({ theme }) => ({
  height: '55px', // Reduced height of the logo
  [theme.breakpoints.down('md')]: {
    height: '55px', // Medium devices
  },
  [theme.breakpoints.down('sm')]: {
    height: '40px', // Smaller devices
  },
  marginRight: '10px', // Space between logo and navigation
}));

const LinkButton = styled(Button)(({ theme }) => ({
  color: '#ffffff', // White color
  textTransform: 'none',
  fontSize: '0.9rem', // Adjusted font size
  fontWeight: 600, // Slightly bolder text
  margin: '0 6px', // Adjusted spacing between buttons
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#e04f53', // Lighter shade on hover
    transition: '#e04f53 0.3s ease',
  },
  display: 'flex',
  alignItems: 'center',
  '&.active': {
    borderBottom: '2px solid #e04f53', // Highlight the active link
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem', // Medium devices
    margin: '0 4px', // Adjust spacing for medium devices
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem', // Smaller devices
    margin: '0 2px', // Adjust spacing for small devices
    display: 'none', // Hide link buttons on small screens
  },
}));

const Icon = styled('span')(({ theme }) => ({
  marginRight: '4px', // Reduced space between icon and text
  fontSize: '1rem', // Standard icon size
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem', // Medium devices
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem', // Smaller devices
  },
}));

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // State for managing menu open/close
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        handleMenuClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ height: '100%', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <Logo src={logo} alt="The Omega Community Foundation" />

        {/* Desktop Links */}
        <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <LinkButton 
            component={Link} 
            to="test/" 
            className={currentPath === 'test/' ? 'active' : ''}
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
        </div>

        {/* Mobile Menu Button */}
        <IconButton 
          edge="end" 
          color="inherit" 
          aria-label="menu" 
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', sm: 'none' } }} // Show only on small screens
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu

          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              width: '200px', // Set width for dropdown
              borderRadius: '8px', // Rounded corners for dropdown
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black background
              
            },
          }}
        >
          <MenuItem 
            component={Link} 
            to="test/" 
            onClick={handleMenuClose} 
            selected={currentPath === 'test/'}
            sx={{ color: '#ffffff' }}
          >
            <Icon><HomeIcon /></Icon>
            Home
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/donate" 
            onClick={handleMenuClose} 
            selected={currentPath === '/donate'}
            sx={{ color: '#ffffff' }}
          >
            <Icon><DonationIcon /></Icon>
            Donate
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/event-info" 
            onClick={handleMenuClose} 
            selected={currentPath === '/event-info'}
            sx={{ color: '#ffffff' }}
          >
            <Icon><EventIcon /></Icon>
            Event Info
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/about" 
            onClick={handleMenuClose} 
            selected={currentPath === '/about'}
            sx={{ color: '#ffffff' }}
          >
            <Icon><InfoIcon /></Icon>
            About
          </MenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
