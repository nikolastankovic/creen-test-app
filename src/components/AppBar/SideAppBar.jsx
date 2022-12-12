import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from './Header';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/index';
import { deleteBook, setBookPreviewVisibility } from '../../store/books';

export const SideAppBar = ({ data,  backgroundColor }) => {

  const navigate = useNavigate();
  const dispatch  = useAppDispatch();


  const handleActionsMenuClick = (type) => {
    switch (type) {
      case 'DELETE':
        dispatch(deleteBook(data.id))
        dispatch(setBookPreviewVisibility(false));
        break;
      case 'EDIT':
        navigate('/form', {state: {id: data.id}});
        break;
      default:
        break;
    }
  }
  const Title = ({title, subTitle}) => {
    return (
      <Box>
        <Typography
          variant="h6"
          component="div"
          fontWeight={400}>
          {title}
        </Typography>
        <Typography
          variant="subtitle3"
      
          component="div"
          fontWeight={400}>
          {subTitle}
        </Typography>
      </Box>
    )
  }

  const ActionMenu = () => {
    return (
     <>
        <EditButton handleClick={() => handleActionsMenuClick('EDIT')} />
        <DeleteButton handleClick={() => handleActionsMenuClick('DELETE')} />
      </>
    )
  }

  return (
    <Header 
      backgroundColor={'#023772'} 
      bottomLeft={<Title 
        title={data.title} 
        subTitle={data.nameOfAuthor} 
        />
      } 
      topRight={<ActionMenu />} paddingLeft={5} />
  )
}
