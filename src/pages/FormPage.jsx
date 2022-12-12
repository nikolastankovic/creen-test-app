import { useEffect, useState } from 'react'
import { BackButton } from '../components/BackButton/BackButton';
import { useAppDispatch } from '../store/index';
import { useAppSelector } from '../store/index';
import { addBook, getBook, fetchBooks, setClearSingleBookData, setClearStatus, updateBook, setBooksFromCache } from '../store/books';
import { randomNumber } from '../helpers/functions';
import { addControls, editControls } from '../mock/form';
import { useNavigate, useLocation } from 'react-router-dom';
import ConfirmationDialog from '../components/Dialog/ConfirmationDialog';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar/AppBar';
import Form from '../components/Form/Form';
import Typography from '@mui/material/Typography';
import Header from '../components/AppBar/Header';
import Loader from '../components/Loader/Loader';




export const FormPage = () => {
  const dispatch = useAppDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const requestStatus = useAppSelector((state) => state.books.requestStatus);
  const loading = useAppSelector((state) => state.books.loading);
  const singleBookData = useAppSelector((state) => state.books.singleBookData);
  const [controls, setControls] = useState(addControls);



  const [initialValues, setInitialValues] = useState({
    title: "",
    nameOfAuthor: "",
    dateOfBirthAuthor: "",
    numberOfPages: '',
    yearOfPublishing: '',
    quantity: '',
    coverPhoto: ""
  });

  const localValues = {
    title: "",
    nameOfAuthor: "",
    dateOfBirthAuthor: "",
    numberOfPages: '',
    yearOfPublishing: '',
    quantity: '',
    coverPhoto: ""
  }

  const navigate = useNavigate();
  const location = useLocation();
  const formType = location.state?.id ? 'EDIT' : 'ADD';

  const handleSubmit = (formValues) => {
    if (location.state?.id) {
      dispatch(updateBook({
        id: location.state.id,
        body: { ...formValues, coverPhoto: formValues.coverPhoto.slice(formValues.coverPhoto.indexOf('images'), formValues.coverPhoto.length) }
      }))
    } else {
      formValues = { isbn: randomNumber(500, 1), ...formValues }
      dispatch(addBook(formValues))
    }
    clearForm();
    setModalOpen(true);
    navigate('/');
  };

  const clearForm = () => {
    setInitialValues({
      title: "",
      nameOfAuthor: "",
      dateOfBirthAuthor: "",
      numberOfPages: '',
      yearOfPublishing: '',
      quantity: '',
      coverPhoto: ""
    })
  }


  useEffect(() => {
    if (location.state?.id) {
      dispatch(getBook(location.state.id));
    } else {
      setControls(addControls)
    }
    return () => {
      dispatch(setClearSingleBookData());
    }
  }, [])


  useEffect(() => {
    if (singleBookData !== null) {
      setControls(editControls);
      setInitialValues(singleBookData);
    }
  }, [singleBookData]);


  const handleCallBack = () => {
    setModalOpen(false);
    dispatch(setClearStatus());
    dispatch(fetchBooks({
      requestParams: {
        sortByAuthor: null,
        sortByTitle: null,
        author: null,
      }
    }
    ));
    navigate('/');
  }

  const handleBackButtonClick = () => {
    setInitialValues(localValues);
    dispatch(setBooksFromCache());
    navigate(-1);
  }

  return (
    <>
      <Box width="100%" display="flex" flexDirection="column">
        <AppBar>
          <Header
            backgroundColor={'#0850b6'}
            paddingLeft={5}
            bottomLeft={
              <Typography
                variant="h4"
                noWrap
                component="div"
                fontWeight={600}>{formType === 'EDIT' ? 'Edit Book' : 'Add Book'}
              </Typography>}
            topLeft={<BackButton handleBackClick={handleBackButtonClick} position={'absolute'} top={'210px'} />}
          />
        </AppBar>
        <Box sx={{ flex: 1 }}>
          {loading
            ?
            <Loader />
            :
            <Form
              controls={controls}
              initialValues={initialValues}
              onSubmit={handleSubmit}
              buttonName={'Save Book'}
              paddingLeft={5}
              paddingTop={5}
              paddingBottom={5}
            />
          }
        </Box>
      </Box>
      <ConfirmationDialog isOpen={modalOpen} description={requestStatus.message} handleClose={handleCallBack} buttonText={'Okay'} />
    </>
  )
}
