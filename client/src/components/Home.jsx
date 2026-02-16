import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import Header from './Header'; 
import HomeImage from './home.jpg';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';


const Component = styled(Box)({
  display: 'flex',
  height: '100vh',
  alignItems: 'centre',
    margin: '0 130px',
  '& > div': {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
   
       '& > button': {
        width:180,
        height: 60,   
        }
  },
}); 

const Home = () => {
     const navigate = useNavigate();
  

  return (
    <div>
      <Header />   
      <Component>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}> 


          <Typography variant="h5" gutterBottom sx={{ fontSize: '32px', lineHeight: 1.4 }}>
            Indeed for employers  
            Let’s hire your next great candidate. Fast.
          </Typography>

          <Button variant="contained" onClick={() => navigate(routePath.create)} color="primary" >
            Post a Job 
          </Button>
        </Box>

        <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <img src={HomeImage} alt="home" style={{ maxWidth: '90%', height: 'auto' }} />
        </Box>
      </Component>
    </div>
  );
}

export default Home;
