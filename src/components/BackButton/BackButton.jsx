import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export const BackButton = ({handleBackClick}) => {
  return (
      <Box component="div" onClick={() => handleBackClick()}>
        <Tooltip title="Back">
          <ArrowBackOutlinedIcon  />
        </Tooltip>
      </Box>
  )
}
