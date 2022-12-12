import { useState } from 'react'
import { AddButton } from '../AddButton/AddButton';
import { useAppDispatch } from '../../store/index';
import { useAppSelector } from '../../store/index';
import { fetchBooksByFilter, setBooksFromCache, setResponseFromCache } from '../../store/books';
import SelectMenu from '../SelectMenu/SelectMenu';
import Typography from '@mui/material/Typography';
import Header from './Header';
import Box from '@mui/material/Box';

const MainAppBar = ({ handleAddButton }) => {

  const dispatch = useAppDispatch();
  const authors = useAppSelector((state) => state.books.authors);
  const cachedResponse = useAppSelector((state) => state.books.cachedBooksByAuthors);
  const [selected, setSelected] = useState('');

  const handleSelectChange = (item) => {
    const selectInput = item.target.value;
    setSelected(selectInput);
    if (cachedResponse[selectInput] !== undefined) {
      dispatch(setResponseFromCache(selectInput));
    } else {
      if (selectInput === 'Any author') {
        dispatch(setBooksFromCache())
      } else {
        dispatch(fetchBooksByFilter({
          requestParams: {
            sortByAuthor: 'desc',
            sortByTitle: 'desc',
            author: selectInput,
          }
        }
        ));
      }
    }
  }


  const BottomLeftComponent = () => {
    return (
      <>
      <Box sx={{position: 'absolute', top: '170px'}}>
        <AddButton handleClick={handleAddButton}  />
      </Box>
      <Typography
        variant="h4"
        noWrap
        component="div"
        fontWeight={600}
      >
        Books
      </Typography>
    </>
    )
  }

  return (
    <>
      <Header
        paddingLeft={5}
        bottomLeft={<BottomLeftComponent />}
        bottomRight={<SelectMenu data={authors} onSelectChange={(item) => { handleSelectChange(item) }} selected={selected} />}
        backgroundColor={'#0850b6'}
      />
    </>
  )
}

export default MainAppBar;
