import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


const ProminentAppBar = ({children}) => {
  return (
    <Box sx={{ boxShadow: 3,  }}>  
      <AppBar position="relative" sx={{ minHeight: 128 }}>
         {children}
      </AppBar>
    </Box>
  );
}

export default  ProminentAppBar;