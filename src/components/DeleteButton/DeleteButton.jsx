import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

const DeleteButton = ({handleClick}) => {
  return (
    <Box onClick={handleClick}>
      <DeleteIcon />
    </Box>
  )
}

export default DeleteButton;