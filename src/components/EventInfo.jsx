// import React from 'react';
import React, { useState } from 'react';
import { Box, Typography, Stack, Stepper, Step, StepLabel, StepContent, Accordion, AccordionSummary, AccordionDetails, Card, CardMedia, Divider, List, ListItem, ListItemText, ListItemIcon, Button, Grid, IconButton, Dialog } from '@mui/material';
import { Event, LocationOn, Schedule, ExpandMore, CheckCircle, ArrowBack, ArrowForward} from '@mui/icons-material';
import hotel1 from '../utils/hotel_img_1.jpg';
import hotel2 from '../utils/hotel_img_2.jpg';
import hotel3 from '../utils/hotel_img_6.jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReactPlayer from 'react-player';
import background from '../utils/bg.jpg';
import { styled } from '@mui/material/styles';
import video from '../utils/landingpage.mp4'
import performer_video from '../utils/IMG_1034.mov'

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack content vertically on medium and smaller screens
  },
}));

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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
    { type: 'image', src: hotel3 }, // Image 6
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

    <Box sx={{ mb: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h3"
        sx={{
          mb: { xs: 1, sm: 2 },
          fontWeight: 'bold',
          color: '#e3f2fd',
          fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' } // Responsive font size
        }}
      >
        Date and Time
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ justifyContent: 'center', flexWrap: 'wrap' }} // Allow wrapping on smaller screens
      >
        <Schedule sx={{ color: '#ffab91', fontSize: { xs: '20px', sm: '24px', md: '30px' } }} />
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "22px" }, // Responsive font size
            fontWeight: 'bold',
            color: '#e3f2fd',
          }}
        >
          December 31, 9pm - January 1, 1am MST
        </Typography>
      </Stack>
    </Box>

    <Divider sx={{ my: { xs: 2, sm: 4 }, border: '1px solid #ffab91', opacity: 0.5 }} />

    <Box sx={{ mb: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h3"
        sx={{
          
          mb: { xs: 1, sm: 2 },
          fontWeight: 'bold',
          color: '#e3f2fd',
          fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' } // Responsive font size
        }}
      >
        Location
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ justifyContent: 'center', flexWrap: 'wrap' }} // Allow wrapping on smaller screens
      >
        <LocationOn sx={{ color: '#ffab91', fontSize: { xs: '20px', sm: '24px', md: '30px' } }} />
        <Typography
          variant="body1"
          sx={{
            
            fontSize: { xs: "16px", sm: "18px", md: "22px" }, // Responsive font size
            fontWeight: 'bold',
            color: '#e3f2fd',
          }}
        >
          9495 W Entertainment Blvd, Glendale, AZ 85305
        </Typography>
      </Stack>
    </Box>


<Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />

<Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <IconButton
    onClick={handlePrev}
    sx={{ 
      position: 'absolute', 
      left: { xs: 0, sm: -10, md: -20 }, // Adjust for responsiveness
      zIndex: 1, 
      color: '#ffab91', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
      width: { xs: 40, sm: 50, md: 60 }, 
      height: { xs: 40, sm: 50, md: 60 }
    }}
    aria-label="Previous item"
  >
    <ArrowBack sx={{ fontSize: { xs: 24, sm: 30, md: 40 } }} />
  </IconButton>

  <Card sx={{ 
    maxWidth: '100%', 
    border: '4px solid #ffab91', 
    borderRadius: 2, 
    overflow: 'hidden',
    position: 'relative',
    height: { xs: 300, sm: 350, md: 400 }, // Responsive height
    width: { xs: '100%', sm: '80%', md: '80%' }, // Responsive width
    '&:hover': {
      transform: 'scale(1.05)', 
      transition: 'transform 0.3s ease-in-out',
    }
  }}>
    {items[currentIndex].type === 'image' ? (
      <CardMedia
        component="img"
        alt="Hotel"
        image={items[currentIndex].src}
        onClick={handleOpen} 
        sx={{ 
          height: '100%', 
          width: '100%', 
          objectFit: 'cover', 
          cursor: 'pointer' 
        }} 
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
    sx={{ 
      position: 'absolute', 
      right: { xs: 0, sm: -10, md: -20 }, // Adjust for responsiveness
      zIndex: 1, 
      color: '#ffab91', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
      width: { xs: 40, sm: 50, md: 60 }, 
      height: { xs: 40, sm: 50, md: 60 }
    }}
    aria-label="Next item"
  >
    <ArrowForward sx={{ fontSize: { xs: 24, sm: 30, md: 40 } }} />
  </IconButton>
</Box>


            <Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />

            <Typography
                variant="h3"
                sx={{
                  
                  mb: { xs: 1, sm: 2 }, // Responsive bottom margin
                  fontWeight: 'bold',
                  color: '#e3f2fd',
                  fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }, // Responsive font size
                }}
              >
                Agenda
              </Typography>

              <Stepper
                orientation="vertical"
                sx={{
                  mb: { xs: 2, sm: 4 }, // Responsive bottom margin
                  px: { xs: 1, sm: 2 }, // Responsive horizontal padding
                }}
              >
                {steps.map((step, index) => (
                  <Step key={index} active>
                    <StepLabel>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{
                          
                          fontSize: { xs: '16px', sm: '18px', md: '25px' }, // Responsive font size
                          color: '#e3f2fd',
                        }}
                      >
                        {step.time}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          
                          fontWeight: 'bold',
                          color: '#ffffff',
                          fontSize: { xs: '20px', sm: '22px', md: '24px' }, // Responsive font size
                        }}
                      >
                        {step.title}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <List>
                        {step.details.map((detail, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#ffab91' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={detail}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  
                                  fontSize: { xs: '14px', sm: '16px', md: '20px' }, // Responsive font size
                                  color: '#e3f2fd',
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>

            <Divider sx={{ my: 4, border: '1px solid #ffab91', opacity: 0.5 }} />
            <Typography
                variant="h3"
                sx={{
                  
                  mt: { xs: 3, sm: 4, md: 6 }, // Adjust top margin for different screen sizes
                  mb: { xs: 1, sm: 2 }, // Adjust bottom margin for different screen sizes
                  fontWeight: 'bold',
                  color: '#e3f2fd',
                  fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }, // Responsive font size
                }}
              >
                About the Event
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  
                  lineHeight: 1.8,
                  fontSize: { xs: '16px', sm: '18px', md: '22px' }, // Responsive font size
                  color: '#e3f2fd',
                }}
              >
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
            
            fontWeight: 'bold',
            color: '#fbc02d',
            mb: 2,
            textDecoration: 'underline',
            fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }
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

            <Typography
  variant="h3"
  sx={{
    
    mt: { xs: 3, sm: 4 },
    mb: { xs: 1.5, sm: 2 },
    fontWeight: 'bold',
    color: '#e3f2fd',
    fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize', md: 'h4.fontSize' }, // Further reduced font size
  }}
>
  FAQs
</Typography>

<Accordion id="faq-dress-code" sx={{ mb: { xs: 1, sm: 1.5 } }}>
  <AccordionSummary
    sx={{
      bgcolor: '#1e1e1e',
      py: { xs: 0.5, sm: 0.75 },
    }}
    expandIcon={<ExpandMore sx={{ color: '#ffab91' }} />}
  >
    <Typography
      variant="body1"
      gutterBottom
      sx={{
        fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Adjusted font size
        fontWeight: 'bold',
        color: '#e3f2fd',
      }}
    >
      What is your refund policy?
    </Typography>
  </AccordionSummary>
  <AccordionDetails
    sx={{
      py: { xs: 0.5, sm: 0.75 },
    }}
  >
    <Typography
      variant="body1"
      gutterBottom
      sx={{
        fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Adjusted font size
        color: 'black',
      }}
    >
      We appreciate your support to the Omega Community Foundation. We are a 501c3 organization doing good works throughout the West Valley. Again, we appreciate your continued support!
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion id="faq-parking" sx={{ mb: { xs: 1, sm: 1.5 } }}>
  <AccordionSummary
    sx={{
      bgcolor: '#1e1e1e',
      py: { xs: 0.5, sm: 0.75 },
    }}
    expandIcon={<ExpandMore sx={{ color: '#ffab91' }} />}
  >
    <Typography
      variant="body1"
      gutterBottom
      sx={{
        fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Adjusted font size
        fontWeight: 'bold',
        color: '#e3f2fd',
      }}
    >
      May I book a room at the event hotel?
    </Typography>
  </AccordionSummary>
  <AccordionDetails
    sx={{
      py: { xs: 0.5, sm: 0.75 },
    }}
  >
    <Typography
      variant="body1"
      gutterBottom
      sx={{
        fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Adjusted font size
        color: 'black',
      }}
    >
      Yes, directly with the Renaissance at Westgate, 623-937-3700 or at Marriott.com. If you plan on staying at the hotel, we recommend you book your hotel immediately. The Fiesta Bowl is in town and the demand will be significant.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion id="faq-meals" sx={{ mb: { xs: 1, sm: 1.5 } }}>
  <AccordionSummary
    sx={{
      bgcolor: '#1e1e1e',
      py: { xs: 0.5, sm: 0.75 },
    }}
    expandIcon={<ExpandMore sx={{ color: '#ffab91' }} />}
  >
    <Typography
      variant="body1"
      gutterBottom
      sx={{
        fontSize: { xs: '10px', sm: '12px', md: '14px'}, // Adjusted font size
        fontWeight: 'bold',
        color: '#e3f2fd',
      }}
    >
      Should I dress in Harlem Renaissance theme?
    </Typography>
  </AccordionSummary>
  <AccordionDetails
    sx={{
      py: { xs: 0.5, sm: 0.75 },
    }}
  >
    <Typography
      variant="body1"
      gutterBottom
      sx={{
        fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Adjusted font size
        color: 'black',
      }}
    >
      We hope so! We want to see you represent for one of the most prolific eras in history. Even if not in theme, please dress to impress!
    </Typography>
  </AccordionDetails>
</Accordion>
            
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: { xs: 'flex', md: 'block' }, justifyContent: 'center' }}>
  <Box
    sx={{
      position: 'sticky',
      top: { xs: 'auto', md: 80 },
      width: { xs: '90%', sm: '80%', md: '80%' }, // Adjusted width for smaller screens
      maxWidth: { xs: '300px', sm: '350px', md: '400px' }, // Adjusted maxWidth for smaller screens
      p: { xs: 2, sm: 3, md: 4 }, // Adjusted padding for smaller screens
      bgcolor: '#1e1e1e',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: 4,
      textAlign: 'center',
      mb: { xs: 2, sm: 3, md: 4 }, // Adjusted margin bottom for smaller screens
      border: '4px solid #ffab91',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center content horizontally
    }}
  >
    <Typography
      variant="h4"
      sx={{
        mb: { xs: 1, sm: 1.5, md: 2 }, // Adjusted margin bottom for smaller screens
        fontWeight: 'bold',
        color: '#e3f2fd',
        fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize', md: 'h4.fontSize' }, // Adjusted font size for smaller screens
      }}
    >
      Buy Your Ticket Now!
    </Typography>
    <Button
      variant="contained"
      sx={{
        fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Adjusted font size for smaller screens
        fontWeight: 'bold',
        p: { xs: 1.5, sm: 2, md: 2 }, // Adjusted padding for smaller screens
        backgroundColor: '#ff5a5f',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#e04f53',
          transition: 'background-color 0.3s ease',
        },
        borderRadius: 1,
        px: { xs: 3, sm: 4, md: 4 }, // Adjusted horizontal padding for smaller screens
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
        
        <Dialog
  open={open}
  onClose={handleClose}
  maxWidth="xl"
  fullWidth
  sx={{ 
    '& .MuiDialog-paper': { 
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderRadius: 0,
      overflow: 'hidden',
      position: 'relative',
      width: {
        xs: '90vw',
        sm: '80vw',
        md: '70vw',
        lg: '60vw',
        xl: '50vw'
      },
      height: {
        xs: '90vh',
        sm: '80vh',
        md: '70vh',
        lg: '60vh',
        xl: '50vh'
      },
      maxWidth: {
        xs: '95vw',
        sm: '85vw',
        md: '75vw',
        lg: '65vw',
        xl: '55vw'
      },
      maxHeight: {
        xs: '95vh',
        sm: '85vh',
        md: '75vh',
        lg: '65vh',
        xl: '55vh'
      }
    },
    '& .MuiDialogContent-root': {
      padding: 0
    }
  }}
>
  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
    <IconButton
      onClick={handlePrev}
      sx={{ 
        position: 'absolute', 
        left: {
          xs: 10,  // For extra small devices
          sm: 20,  // For small devices
          md: 30,  // For medium devices
          lg: 40,  // For large devices
          xl: 50   // For extra large devices
        },
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 1, 
        color: '#ffab91', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
        width: {
          xs: 40,  // For extra small devices
          sm: 50,  // For small devices
          md: 60,  // For medium devices
          lg: 70,  // For large devices
          xl: 80   // For extra large devices
        },
        height: {
          xs: 40,  // For extra small devices
          sm: 50,  // For small devices
          md: 60,  // For medium devices
          lg: 70,  // For large devices
          xl: 80   // For extra large devices
        }
      }}
      aria-label="Previous item"
    >
      <ArrowBack sx={{ fontSize: {
        xs: 30,  // For extra small devices
        sm: 40,  // For small devices
        md: 50,  // For medium devices
        lg: 60,  // For large devices
        xl: 70   // For extra large devices
      }}} />
    </IconButton>

    {items[currentIndex].type === 'image' ? (
      <img
        src={items[currentIndex].src}
        alt="Enlarged"
        style={{ 
          width: '100%', 
          height: 'auto', 
          maxHeight: '80vh', 
          objectFit: 'contain', 
          display: 'block', 
          margin: 'auto', 
          transition: 'transform 0.3s ease-in-out', 
          cursor: 'pointer'
        }}
        onClick={handleClose}
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
        right: {
          xs: 10,  // For extra small devices
          sm: 20,  // For small devices
          md: 30,  // For medium devices
          lg: 40,  // For large devices
          xl: 50   // For extra large devices
        },
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 1, 
        color: '#ffab91', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
        width: {
          xs: 40,  // For extra small devices
          sm: 50,  // For small devices
          md: 60,  // For medium devices
          lg: 70,  // For large devices
          xl: 80   // For extra large devices
        },
        height: {
          xs: 40,  // For extra small devices
          sm: 50,  // For small devices
          md: 60,  // For medium devices
          lg: 70,  // For large devices
          xl: 80   // For extra large devices
        }
      }}
      aria-label="Next item"
    >
      <ArrowForward sx={{ fontSize: {
        xs: 30,  // For extra small devices
        sm: 40,  // For small devices
        md: 50,  // For medium devices
        lg: 60,  // For large devices
        xl: 70   // For extra large devices
      }}} />
    </IconButton>
  </Box>
</Dialog>


      
      </OverlayBox>
    </BackgroundBox>
  );
};

export default EventInfo;
