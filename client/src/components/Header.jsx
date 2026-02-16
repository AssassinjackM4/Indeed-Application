import React from 'react';
import { AppBar, Toolbar, Typography, styled  } from '@mui/material';
import { Link } from 'react-router-dom';
import { routePath } from '../routes/route';

 const StyledAppBar = styled(AppBar) ({
    
    '& > div > *':{
     textDecoration: 'none',
     color:'inherit',
     marginRight: 10,
    }
 })


function Header() {
  const logoUrl = "https://www.canny-creative.com/wp-content/uploads/2025/06/Indeed-1.jpg";

  return (
    <StyledAppBar position="static" sx={{ bgcolor:'white', color:'black'}} >
      <Toolbar>
         <Link to={routePath.home}>
             <img src={logoUrl} alt="Logo" style={{ width: 150, marginRight:7 }} /> 
         </Link> 

          <Typography>   
          
         </Typography> 

        <Link to={routePath.create} >Post a Job</Link>
        <Link to={routePath.posts} >Find Job</Link>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
