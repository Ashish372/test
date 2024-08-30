// import React from 'react';
import React, { useState } from 'react';
import { Box, Typography, Stack, Stepper, Step, StepLabel, StepContent, Accordion, AccordionSummary, AccordionDetails, Card, CardMedia, Divider, List, ListItem, ListItemText, ListItemIcon, Button, Grid, IconButton, Dialog } from '@mui/material';
import { Event, LocationOn, Schedule, ExpandMore, CheckCircle, ArrowBack, ArrowForward} from '@mui/icons-material';
import hotel1 from '../utils/hotel_img_1.jpg';
import hotel2 from '../utils/hotel_img_2.jpg';
import hotel3 from '../utils/hotel_img_3.jpg';
import hotel4 from '../utils/hotel_img_4.jpg';
import hotel5 from '../utils/hotel_img_5.jpg';
import hotel6 from '../utils/hotel_img_6.jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReactPlayer from 'react-player';
import background from '../utils/bg.jpg';
import { styled } from '@mui/material/styles';
import video from '../utils/landingpage.mp4'
import performer_video from '../utils/IMG_1034.MOV'

const BackgroundBox = styled(Box)({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// const OverlayBox = styled(Box)({
//   backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better readability
//   borderRadius: '10px',
//   padding: '20px',
//   maxWidth: '90%',
//   margin: '20px',
// });

const OverlayBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderRadius: '10px',
  padding: '20px',
  maxWidth: '90%',
  margin: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
    margin: '10px',
  },
}));

const EventInfo = () => {
  const [playing, setPlaying] = React.useState(true);
  

  const handlePlayPause = () => {
    setPlaying(!playing);}
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  

  // const images = [hotel1, hotel2,hotel3,hotel4,hotel5,hotel6]; // Add more images to this array as needed
  const items = [
    { type: 'image', src: hotel1 }, // Image 1
    { type: 'image', src: hotel2 }, // Image 2
    { type: 'image', src: hotel3 }, // Image 3
    { type: 'image', src: hotel4 }, // Image 4
    { type: 'image', src: hotel5 }, // Image 5
    { type: 'image', src: hotel6 }, // Image 6
    { type: 'tour', src: 'https://selfwalkrenaissanceglendale.web.app/' } // 3D Virtual Tour
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const steps = [
    {
      time: '9:00 PM - 1:00 AM',
      title: 'The Sounds of Vaughn Willis and Ear Candy then DJ Biz International',
      details: ['Overview of the day', 'Introduction of speakers', 'Housekeeping notes']
    },
    {
      time: '10:00 PM - 12:00 AM',
      title: 'Brunch',
      details: ['Keynote address by John Doe', 'Q&A session']
    },
    {
      time: '12:00 AM - 12:30 AM',
      title: 'A Midnight Toast Bringing in 2025!!!',
      details: ['Refreshments', 'Networking']
    }
  ];

  return (
    <BackgroundBox>
      <OverlayBox>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 4,
        borderRadius: 2,
        overflow: 'hidden',
        height: { xs: '300px', sm: '300px', md: '400px' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <ReactPlayer
          url={video}
          playing={playing}
          loop
          width='100%'
          height='100%'
          style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
          aria-label="Video background"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
          }}
        />
        <IconButton
          onClick={handlePlayPause}
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            zIndex: 2,
            color: '#ffffff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Haettenschweiler",
          fontSize: { xs: 'h4.fontSize', sm: 'h4.fontSize', md: 'h2.fontSize' },
          color: '#ffffff',
          textAlign: 'center',
          p: 2,
          mt: 2, // Margin top to create space between video and title
          zIndex: 1,
        }}
      >
        The Harlem Renaissance, a New Year's Eve with Vaughn Willis and Ear Candy
      </Typography>
    </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" sx={{ fontFamily: "Amasis MT Pro Black", mb: 2, fontWeight: 'bold', color: '#e3f2fd' }}>
                Date and Time
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ justifyContent: 'center' }}>
                <Schedule sx={{ color: '#ffab91' }} />
                <Typography variant="body3" sx={{ fontFamily: "Amasis MT Pro Black", fontSize: "22px", fontWeight: 'bold', color: '#e3f2fd' }}>
                  December 31, 9pm - January 1, 1am MST
                </Typography>
              </Stack>
            </Box>

            <Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />

            <Box sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontFamily: "Amasis MT Pro Black", mb: 2, fontWeight: 'bold', color: '#e3f2fd' }}>
              Location
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ justifyContent: 'center' }}>
              <LocationOn sx={{ color: '#ffab91' }} />
              <Typography variant="body1" sx={{ fontFamily: "Amasis MT Pro Black", fontSize: "22px", fontWeight: 'bold', color: '#e3f2fd' }}>
                9495 W Entertainment Blvd, Glendale, AZ 85305
              </Typography>
            </Stack>
          </Box>

          <Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />

          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton
              onClick={handlePrev}
              sx={{ position: 'absolute', left: -10, zIndex: 1, color: '#ffab91', backgroundColor: 'rgba(0, 0, 0, 0.5)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, width: 60, height: 60 }}
              aria-label="Previous item"
            >
              <ArrowBack sx={{ fontSize: 50 }} />
            </IconButton>

            <Card sx={{ 
              maxWidth: '100%', 
              border: '4px solid #ffab91', 
              borderRadius: 2, 
              overflow: 'hidden',
              position: 'relative',
              height: 400, // Fixed height
              width: '80%', // Full width of the container
              '&:hover': {
                transform: 'scale(1.05)', // Slight zoom effect on hover
                transition: 'transform 0.3s ease-in-out',
              }
            }}>
              {items[currentIndex].type === 'image' ? (
                <CardMedia
                  component="img"
                  alt="Hotel"
                  image={items[currentIndex].src}
                  onClick={handleOpen} // Opens the modal on click
                  sx={{ 
                    height: '100%', 
                    width: '100%', 
                    objectFit: 'cover', 
                    cursor: 'pointer' 
                  }} // Adds a pointer cursor to indicate it's clickable
                />
              ) : (
                <Box
                  onClick={handleOpen}
                  sx={{ 
                    height: '100%', 
                    width: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#000',
                    borderRadius: 2,
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  <Typography variant="h4" sx={{ color: '#fff' }}>
                    Click to view 3D Tour
                  </Typography>
                </Box>
              )}
            </Card>

            <IconButton
              onClick={handleNext}
              sx={{ position: 'absolute', right: -10, zIndex: 1, color: '#ffab91', backgroundColor: 'rgba(0, 0, 0, 0.5)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, width: 60, height: 60 }}
              aria-label="Next item"
            >
              <ArrowForward sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>

            <Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />

            <Typography variant="h3" sx={{ fontFamily: "Amasis MT Pro Black", mb: 2, fontWeight: 'bold', color: '#e3f2fd' }}>
              Agenda
            </Typography>
            <Stepper orientation="vertical" sx={{ mb: 4 }}>
              {steps.map((step, index) => (
                <Step key={index} active>
                  <StepLabel>
                    <Typography variant="body2" gutterBottom sx={{ fontFamily: "Amasis MT Pro Black", fontSize: "25px", color: '#e3f2fd' }}>{step.time}</Typography>
                    <Typography variant="h5" sx={{ fontFamily: "Amasis MT Pro Black", fontWeight: 'bold', color: '#ffffff' }}>{step.title}</Typography>
                  </StepLabel>
                  <StepContent>
                    <List>
                      {step.details.map((detail, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: '#ffab91' }} />
                          </ListItemIcon>
                          <ListItemText primary={detail} sx={{ '& .MuiListItemText-primary': { fontFamily: "Amasis MT Pro Black", fontSize: '20px', color: '#e3f2fd' } }} />
                        </ListItem>
                      ))}
                    </List>
                  </StepContent>
                </Step>
              ))}
            </Stepper>

            <Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />

      <Typography variant="h3" sx={{ fontFamily: "Amasis MT Pro Black", mt: 6, mb: 2, fontWeight: 'bold', color: '#e3f2fd' }}>
        About the Event
      </Typography>
      <Typography variant="body2" sx={{ fontFamily: "Amasis MT Pro Black", lineHeight: 1.8, fontSize: "22px", color: '#e3f2fd' }}>
        <strong>The Omega Community Foundation Presents:</strong><br />
        <strong>The Harlem Renaissance, a New Year's Eve with Vaughn Willis and Ear Candy</strong><br />
        Also featuring DJ Biz International<br /><br />
        <span style={{ textDecoration: 'underline' }}><strong>Event Details:</strong></span><br />
        The Renaissance at Westgate, 9495 W. Entertainment Blvd, Glendale, AZ, 85305<br /><br />
        <span style={{ textDecoration: 'underline' }}><strong>Date & Time:</strong></span><br />
        12.31.24, 9PM-1AM<br /><br />
        <span style={{ textDecoration: 'underline' }}><strong>Dress Code:</strong></span><br />
        Dress the Part! Dress to Impress!<br /><br />
        <span style={{ textDecoration: 'underline' }}><strong>Additional Information:</strong></span><br />
        Come Party with a Purpose!!!<br />
        Also featuring Brunch at Midnight!<br /><br />
        <span style={{ textDecoration: 'underline' }}><strong>Early Bird Pricing:</strong></span><br />
        Started 4 July, 2024<br /><br />
      </Typography>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Amasis MT Pro Black",
            fontWeight: 'bold',
            color: '#fbc02d',
            mb: 2,
            textDecoration: 'underline',
          }}
        >
          Exclusive DJ Biz International Preview
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', sm: '80%', md: '100%' }, // Responsive width
            height: { xs: '200px', sm: '300px', md: '500px' }, // Adjust height as needed
            mx: 'auto', // Center the box horizontally
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ReactPlayer
            url={performer_video}
            controls
            width='100%'
            height='100%'
            style={{ objectFit: 'cover' }} // Ensures the video covers the player area
          />
        </Box>
      </Box>


            <Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />

            <Typography variant="h3" sx={{ fontFamily: "Amasis MT Pro Black", mt: 6, mb: 2, fontWeight: 'bold', color: '#e3f2fd' }}>
              FAQs
            </Typography>
            <Accordion>
              <AccordionSummary sx={{ bgcolor: '#1e1e1e' }} expandIcon={<ExpandMore sx={{ color: '#ffab91' }} />}>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "25px", fontWeight: 'bold', color: '#e3f2fd' }}>What is the dress code?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "20px", color: '#e3f2fd' }}>The dress code is business casual.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ bgcolor: '#1e1e1e' }} expandIcon={<ExpandMore sx={{ color: '#ffab91' }} />}>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "25px", fontWeight: 'bold', color: '#e3f2fd' }}>Is there parking available?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "20px", color: '#e3f2fd' }}>Yes, there is ample parking available at the venue.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ bgcolor: '#1e1e1e' }} expandIcon={<ExpandMore sx={{ color: '#ffab91' }} />}>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "25px", fontWeight: 'bold', color: '#e3f2fd' }}>Will meals be provided?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "20px", color: '#e3f2fd' }}>Yes, lunch and refreshments will be provided.</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: { xs: 'block', md: 'block' } }}>
            <Box
              sx={{
                position: 'sticky',
                top: { xs: 'auto', md: 80 },
                width: '80%',
                maxWidth: '400px',
                p: 4,
                bgcolor: '#1e1e1e',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: 4,
                textAlign: 'center',
                mb: 4,
                border: '4px solid #ffab91',
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#e3f2fd' }}>
                Buy Your Ticket Now!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontSize: "18px",
                  fontWeight: 'bold',
                  p: 2,
                  backgroundColor: '#ff5a5f',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#e04f53',
                    transition: 'background-color 0.3s ease',
                  },
                  borderRadius: 1,
                  px: 4,
                }}
                href="https://www.eventbrite.com/e/the-harlem-renaissance-a-new-years-eve-with-vaughn-willis-and-ear-candy-tickets-924716671457?aff=ebdssbdestsearch"
                target="_blank"
                fullWidth
              >
                Buy Tickets
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        <Dialog //for image enlargement
        open={open}
        onClose={handleClose}
        maxWidth="xl" // Allows the dialog to be larger
        fullWidth // Ensures the dialog takes the full width
        sx={{ 
          '& .MuiDialog-paper': { 
            backgroundColor: 'transparent', // Transparent background
            boxShadow: 'none', // Remove default shadow
            borderRadius: 0, // Remove default border radius
            overflow: 'hidden',
            position: 'relative',
            width: '80vw', 
            height: '80vh', 
            maxWidth: '90vw', 
            maxHeight: '90vh'
          },
          '& .MuiDialogContent-root': {
            padding: 0 // Remove default padding
          }
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <IconButton
            onClick={handlePrev}
            sx={{ 
              position: 'absolute', 
              left: 20, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              zIndex: 1, 
              color: '#ffab91', 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
              width: 60, 
              height: 60 
            }}
            aria-label="Previous item"
          >
            <ArrowBack sx={{ fontSize: 50 }} />
          </IconButton>

          {items[currentIndex].type === 'image' ? (
            <img
              src={items[currentIndex].src}
              alt="Enlarged"
              style={{ 
                width: '100%', // Fill the dialog width
                height: 'auto', 
                maxHeight: '80vh', 
                objectFit: 'contain', 
                display: 'block', 
                margin: 'auto', 
                transition: 'transform 0.3s ease-in-out', 
                cursor: 'pointer'
              }} // Sets image size to fit within the dialog
              onClick={handleClose} // Closes the modal when the image is clicked
            />
          ) : (
            <iframe
              src={items[currentIndex].src}
              frameBorder="0"
              allow="fullscreen"
              style={{
                width: '100%',
                height: '100%',
              }}
              title="3D Virtual Tour"
            ></iframe>
          )}

          <IconButton
            onClick={handleNext}
            sx={{ 
              position: 'absolute', 
              right: 20, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              zIndex: 1, 
              color: '#ffab91', 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
              width: 60, 
              height: 60 
            }}
            aria-label="Next item"
          >
            <ArrowForward sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
      </Dialog>
      
      </OverlayBox>
    </BackgroundBox>
  );
};

export default EventInfo;
