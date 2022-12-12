import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Box display="flex" sx={{ flexGrow: 1, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Box>
  )
}
export default Loader;
