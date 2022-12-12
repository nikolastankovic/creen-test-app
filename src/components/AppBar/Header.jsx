import React from 'react'
import Box from '@mui/material/Box';

const Header = ({ topLeft, topRight, bottomLeft, bottomRight, ...styles }) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', minHeight: '200px', flexDirection: 'column', paddingLeft: 2, paddingRight: 2, boxSizing: 'border-box', ...styles}}>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
        <Box sx={{ flex: 0.5}}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            {topLeft}
          </Box>
        </Box>
        <Box sx={{ flex: 0.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
            {topRight}
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
        <Box sx={{ flex: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            {bottomLeft}
          </Box>
        </Box>
        <Box sx={{ flex: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
            {bottomRight}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header;