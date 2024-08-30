import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import background from '../utils/bg.jpg';

const milestones = [
  { year: '2010', event: 'Company founded' },
  { year: '2015', event: 'Reached 1 million users' },
  // Add more milestones as needed
];

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack content vertically on medium and smaller screens
  },
}));

const OverlayBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderRadius: '10px',
  padding: theme.spacing(4),
  maxWidth: '90%',
  margin: 'auto',
  color: '#fff',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '100%',
  },
}));

const About = () => {
  return (
    <BackgroundBox>
      <Container maxWidth="lg">
        <OverlayBox>
          {/* Header Section */}
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: { xs: 2, sm: 3, md: 4 },
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
            }}
          >
            Learn more about our company, mission, values, and history.
          </Typography>

          {/* Mission & Vision Section */}
          <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                mb: { xs: 2, sm: 3 },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              Our mission is to provide exceptional service and to follow through on our promises. We aim to deliver high-quality products tailored to the needs of our clients.
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                mb: { xs: 2, sm: 3 },
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              Our vision is to be the leading company in our industry, known for our commitment to excellence and our innovative solutions.
            </Typography>
          </Box>

          {/* Values Section */}
          <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                mb: { xs: 2, sm: 3 },
              }}
            >
              Our Values
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              - Integrity: We uphold the highest standards of integrity in all of our actions.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              - Quality: We provide outstanding products and unsurpassed service that deliver premium value to our customers.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              - Teamwork: We work together, across boundaries, to meet the needs of our customers and to help our company win.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              - Innovation: We foster a culture of innovation to constantly improve our products and services.
            </Typography>
          </Box>

          {/* History Section */}
          <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                mb: { xs: 2, sm: 3 },
              }}
            >
              History
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              <strong>Founding:</strong> Omega Psi Phi Fraternity, Inc. was established on November 17th, 1911, at Howard University by Brothers Edgar Amos Love, Oscar James Cooper, Frank Coleman, and Dr. Ernest Everett Just.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              <strong>Expansion:</strong> In 1941, the 17th Grand Basileus Z. Alexander Looby approved the creation of the 12th District to expand the Fraternity’s presence.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              <strong>West Valley Initiative:</strong> On July 15th, 2021, 14 Brothers in Phoenix’s West Valley met to address the need for a new Graduate Chapter due to underrepresentation and long travel distances to existing chapters.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              <strong>Charter Application:</strong> The group submitted a Charter application, which was reviewed and approved by Brother Kwame Dow and the Supreme Council. The application was approved on December 15th, 2021.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              <strong>First Meeting:</strong> Xi Nu Nu Graduate Chapter held its first official meeting on January 6th, 2022, electing its Chapter Officers and setting plans for community service and chapter activities.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              <strong>Growth and Impact:</strong> Since Chartering, the Chapter has doubled its membership, reclaimed 12 Brothers, and conducted over 19 community service projects, including various drives, marches, and collaborations with local organizations.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              <strong>Motto:</strong> The Chapter proudly upholds the motto “Lifting As We Climb” and is recognized as the “Iconic Xi Nu Nu” Chapter.
            </Typography>
          </Box>

          {/* Visit Our Site Section */}
          <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                mb: { xs: 2, sm: 3 },
              }}
            >
              Visit Our Site for More Information
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              For further details about our company, our latest updates, and ways you can connect with us, please visit our official website.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://xinunu.org/non-profit-foundation/" // Replace with your actual site link
              sx={{
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }, // Adjust font size based on screen size
                padding: { xs: '10px 20px', md: '12px 24px' }, // Adjust padding for button
                backgroundColor: '#ff5a5f',
                '&:hover': {
                  backgroundColor: '#e04f53', // Darker shade on hover
                }
              }}
            >
              Visit Our Website
            </Button>
          </Box>
        </OverlayBox>
      </Container>
    </BackgroundBox>
  );
};

export default About;
