import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

const EditButton = ({handleClick}) => {
  return (
    <Box onClick={handleClick}>
      <EditIcon />
    </Box>
  )
}

export default EditButton;