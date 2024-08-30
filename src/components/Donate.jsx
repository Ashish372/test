import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ParkIcon from '@mui/icons-material/Park';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ReactPlayer from 'react-player';
import blood_donation from '../utils/blood_donation.jpg';
import cleanup from '../utils/cleanup.jpg';
import background from '../utils/bg.jpg'; // Import the background image

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack content vertically on medium and smaller screens
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 50px',
  paddingTop: '100px', // Adjust top padding to create space from the nav bar
  paddingBottom: '50px', // Adjust bottom padding for spacing
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
    paddingTop: '60px', // Adjust padding on small screens
    paddingBottom: '30px', // Adjust bottom padding on small screens
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  width: '100%',
  padding: '40px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
  borderRadius: '8px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  border: '2px solid #ff5a5f',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%', // Make content box full width on medium screens
    padding: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px', // Reduce padding on small screens
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden', // Prevent images from overflowing
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row', // Display images side by side on medium screens
    flexWrap: 'wrap',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack images on small screens
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '50%',
  borderRadius: '8px',
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1,
  },
  [theme.breakpoints.down('md')]: {
    height: '40%',
  },
  [theme.breakpoints.down('sm')]: {
    height: '30%',
  },
}));

const Image = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)', // Slight zoom effect on hover
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  textAlign: 'center',
  padding: '20px',
}));

const Donate = () => {
  return (
    <BackgroundBox>
      <ContentWrapper>
        <ContentBox>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#002f6c', fontSize: { xs: '2rem', md: '3rem' } }}>
            Support Our Cause
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.5rem' } }}>
            Your generous donations help us organize life-saving events and community clean-ups. Here's how you can contribute:
          </Typography>
          <List sx={{ mb: 3, width: '100%' }}>
            <ListItem sx={{ mb: 2 }}>
              <ListItemIcon>
                <BloodtypeIcon color="error" sx={{ fontSize: { xs: 30, md: 50 } }} />
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    Blood Donation
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' } }}>
                    Help save lives by donating blood at our organized events. Your contribution can make a significant impact in someone's life.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ mb: 2 }}>
              <ListItemIcon>
                <ParkIcon color="success" sx={{ fontSize: { xs: 30, md: 50 } }} />
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    Park Cleanups
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' } }}>
                    Join us in keeping our parks clean and green. Volunteer for our park cleanup events and make our community a better place.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ mb: 2 }}>
              <ListItemIcon>
                <FoodBankIcon color="primary" sx={{ fontSize: { xs: 30, md: 50 } }} />
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    Food Banks
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' } }}>
                    Support local food banks by donating non-perishable items. Your contribution ensures that no one in our community goes hungry.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HowToVoteIcon color="secondary" sx={{ fontSize: { xs: 30, md: 50 } }} />
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    Voter Registration
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' } }}>
                    Exercise your civic duty by registering to vote. Join our voter registration drives and make your voice heard in the community.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#002f6c', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              A Message from Our Founder
            </Typography>
            <Box sx={{ height: { xs: '30vh', md: '35vh' }, overflow: 'hidden', borderRadius: '8px' }}>
              <ReactPlayer 
                url="https://youtu.be/LnD0dY2AaD8?si=qxV_DoJTYeNti42K" // Replace with your video URL
                width="100%"
                height="100%"
                controls
                style={{ borderRadius: '8px', overflow: 'hidden' }}
              />
            </Box>
          </Box>

          <Box display="flex" justifyContent="center"> {/* Centering the button */}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="https://buy.stripe.com/dR6cPH3O21Oz7U4288"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.25rem',
                fontWeight: 'bold',
                backgroundColor: '#ff5a5f',
                '&:hover': {
                  backgroundColor: '#e14b56',
                },
              }}
            >
              Donate Now
            </Button>
          </Box>
        </ContentBox>
      </ContentWrapper>
      <ImageBox>
        <ImageContainer>
          <Image sx={{ backgroundImage: `url(${cleanup})` }} />
          <Overlay className="overlay">
            <Typography variant="h6">Park Cleanup Events</Typography>
          </Overlay>
        </ImageContainer>
        <ImageContainer>
          <Image sx={{ backgroundImage: `url(${blood_donation})` }} />
          <Overlay className="overlay">
            <Typography variant="h6">Blood Donation</Typography>
          </Overlay>
        </ImageContainer>
      </ImageBox>
    </BackgroundBox>
  );
};

export default Donate;
