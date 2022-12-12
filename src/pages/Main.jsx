import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../store/index';
import { useAppSelector } from '../store/index';
import { deleteBook, fetchBooks, setBookPreviewData, setBookPreviewVisibility, setClearStatus, setSortedByNumber, setSortedByString } from '../store/books';
import { HEADERS } from '../mock/table';
import { SidePreview } from '../components/SidePreview/SidePreview';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from '../components/Dialog/ConfirmationDialog';
import AppBar from '../components/AppBar/AppBar';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainAppBar from '../components/AppBar/MainAppBar';
import Loader from '../components/Loader/Loader';

export const Main = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const isBookPreviewVisible = useAppSelector((state) => state.books.isBookPreviewVisible);
  const books = useAppSelector((state) => state.books.books);
  const loading = useAppSelector((state) => state.books.loading);
  const activeRowId = useAppSelector((state) => state.books.bookPreview)
  const requestStatus = useAppSelector((state) => state.books.requestStatus);
  const bookPreviewData = useAppSelector((state) => state.books.bookPreview);
  const [modalOpen, setModalOpen] = useState(false);

  const showBookInfo = (row) => {
    dispatch(setBookPreviewData({ data: row, visibility: true }));
  }

  const handleTableHeaderSelect = (header) => {
    switch (header.sortType) {
      case 'string':
        dispatch(setSortedByString({ direction: header.sortDirection, key: header.key }))
        break;
      case 'number':
        dispatch(setSortedByNumber({ direction: header.sortDirection, key: header.key }))
        break;
      default:
        break;
    }
  }

  const handleTableMenuClick = (payload) => {
    dispatch(setBookPreviewVisibility(false))
    switch (payload.actionType) {
      case 'EDIT':
        navigation('/form', { state: { id: payload.id } });
        break;
      case 'DELETE':
        dispatch(deleteBook(payload.id))
        break;
      default:
        break;
    }
  }

  const handleDialogOnClose = () => {
    dispatch(fetchBooks({
      requestParams: {
        sortByAuthor: null,
        sortByTitle: null,
        author: null,
      }
    }
    ));
    setModalOpen(false);
    dispatch(setClearStatus());
  }


  useEffect(() => {
    if (requestStatus.message !== null) {
      setModalOpen(true);
    }
  }, [requestStatus.message])

  const menu = [
    {
      title: 'Edit',
      actionType: 'EDIT',
      icon: '',
    },
    {
      title: 'Delete',
      actionType: 'DELETE',
      icon: '',
    }
  ]

  return (
    <Box display="flex">
      <ConfirmationDialog isOpen={modalOpen} description={requestStatus.message} handleClose={handleDialogOnClose} buttonText={'Okay'} />
      <Stack width="100%" flex={1} direction={'row'} spacing={0}>
        <Box height="100vh" flex={1} display="flex" flexDirection="column">
          <AppBar>
            <MainAppBar />
          </AppBar>
          <Box overflow="auto" display="flex" flex="1" sx={{ paddingLeft: 5 }}>
            {loading
              ?
              <Loader />
              : <Table
                onRowSelect={(row) => { showBookInfo(row) }}
                onHeaderSelect={(header) => { handleTableHeaderSelect(header) }}
                data={books}
                menu={menu}
                onMenuClick={(item) => { handleTableMenuClick(item) }}
                headers={HEADERS}
                activeRowId={activeRowId.id}
              />}
          </Box>
          <Pagination overflow={'unset'} />
        </Box>
        {isBookPreviewVisible && <SidePreview data={bookPreviewData} />}
      </Stack>
    </Box>
  )
}
