import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { deleteMethod, getBookById, getBooks, postMethod, updateMethod } from "../api/requests";


export const fetchBooks =
  createAsyncThunk('books/fetchBooks',
    async (args) => {
      return JSON.parse(await getBooks(args))
    });

export const fetchBooksByFilter =
  createAsyncThunk(
    'books/fetchBooksByFilter',
    async (arg) => {
      return JSON.parse(await getBooks(arg))
    });

export const addBook =
  createAsyncThunk(
    'books/addBook',
    async (arg) => {
      return JSON.parse(await postMethod(arg))
    }
  )

export const updateBook =
  createAsyncThunk(
    'books/updateBook',
    async (arg) => {
      return JSON.parse(await updateMethod(arg));
    }
  )
export const getBook =
  createAsyncThunk(
    'books/getBook',
    async (arg) => {
      return JSON.parse(await getBookById(arg));
    }
  )

export const deleteBook =
  createAsyncThunk(
    'books/deleteBook',
    async (arg) => {
      return JSON.parse(await deleteMethod(arg));
    }
  )


const booksSlice = createSlice({
  name: "books",
  initialState: {
    authors: [],
    books: [],
    cachedBooks: [],
    cachedBooksByAuthors: {},
    bookPreview: {},
    isBookPreviewVisible: false,
    loading: false,
    singleBookData: null,
    updateStatus: null,
    deleteStatus: null,
    requestStatus: {
      success: null,
      message: null,
    },

  },
  reducers: {
    setSortedByNumber(state, action) {
      if (action.payload.direction === "DESC") {
        state.books = state.books.sort(
          function (a, b) {
            return b[action.payload.key] - a[action.payload.key]
          })
      } else if (action.payload.direction === "ASC") {
        state.books = state.books.sort(
          function (a, b) {
            return a[action.payload.key] - b[action.payload.key]
          })
      }
    },
    setSortedByString(state, action) {
      if (action.payload.direction === "ASC") {
        state.books = state.books.sort((a, b) => a[action.payload.key].localeCompare(b.name))
      } else if (action.payload.direction === "DESC") {
        state.books = state.books.sort((a, b) => b[action.payload.key].localeCompare(a.name))
      }
    },
    setBookPreviewData(state, action) {
      if (action.payload) {
        state.bookPreview = action.payload.data;
        state.isBookPreviewVisible = action.payload.visibility;
      }
    },
    setBookPreviewVisibility(state, action) {
      state.isBookPreviewVisible = action.payload;
    },
    setBooksFromCache(state, action) {
      state.books = state.cachedBooks;
    },
    setResponseFromCache(state, action) {
      state.books = state.cachedBooksByAuthors[action.payload];
    },
    setClearStatus(state, action) {
      state.requestStatus = {
        message: null,
        success: null,
      }
    },
    setClearSingleBookData(state, action) {
      state.singleBookData = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      if (!!state.cachedBooksByAuthors.length === false) {
        state.cachedBooks = action.payload.records;
        let uniqueAuthorNames = {};
        let authors = [];
        for (let i = 0; i < action.payload.records.length; i++) {
          if (uniqueAuthorNames[action.payload.records[i].nameOfAuthor] === undefined) {
            uniqueAuthorNames[action.payload.records[i].nameOfAuthor] = '';
            authors.push(action.payload.records[i].nameOfAuthor);
          }
        }
        state.authors = ['Any author', ...authors]
      }
      state.books = action.payload.records;
      state.loading = false;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(fetchBooksByFilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooksByFilter.fulfilled, (state, action) => {
      state.books = action.payload.records;
      state.cachedBooksByAuthors[action.payload.records[0].nameOfAuthor] = action.payload.records;
      state.loading = false;
    })
    builder.addCase(fetchBooksByFilter.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(addBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.requestStatus = {
        message: action.payload.info.responseMessage,
        success: true,
      }
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.requestStatus = {
        message: action.payload.info.responseMessage,
        success: false,
      }
      state.loading = false;
    });

    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBook.fulfilled, (state, action) => {
      state.singleBookData = action.payload;
      state.loading = false;
    });
    builder.addCase(getBook.rejected, (state, action) => {
      state.loading = false;
      state.requestStatus = {
        message: action.payload.info.responseMessage,
        success: false,
      }
    });

    builder.addCase(updateBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      state.requestStatus = {
        message: action.payload.info.responseMessage,
        success: true,
      }
      state.isBookPreviewVisible = false;
      state.bookPreview = { ...state.bookPreview, id: -1 };
      state.loading = false;
    });
    builder.addCase(updateBook.rejected, (state, action) => {
      state.loading = false;
      state.requestStatus = {
        message: action.payload.info.responseMessage,
        success: false,
      }
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.requestStatus = {
        message: action.payload.info.responseMessage,
        success: true,
        type: 'DELETE'
      }
      state.isBookPreviewVisible = false;
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.requestStatus = {
        message: action.payload.error.responseMessage,
        success: false,
      }
    });
  }
})

export const {
  setSortedByNumber,
  setSortedByString,
  setBookPreviewData,
  setBooksFromCache,
  setResponseFromCache,
  setClearStatus,
  setClearSingleBookData,
  setBookPreviewVisibility
} = booksSlice.actions

export default booksSlice.reducer