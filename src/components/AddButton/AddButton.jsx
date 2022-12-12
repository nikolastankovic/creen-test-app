import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";


export const AddButton = ({ handleClick, style }) => {
  return (
    <Tooltip title="Add" >
      <Link to="/form" >
        <Fab aria-label="add" >
          <AddIcon />
        </Fab>
      </Link>
    </Tooltip>
  )
}
