import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../types/books";
import axios from "axios";

interface BooksState {
  recommended: Book[];
  finished: Book[];
  selected: Book[];
  loading: {
    recommended: boolean;
    finished: boolean;
    selected: boolean;
  };
  error: {
    recommended: string | null;
    finished: string | null;
    selected: string | null;
  };
}

const initialState: BooksState = {
  recommended: [],
  finished: [],
  selected: [],
  loading: {
    recommended: false,
    finished: false,
    selected: false,
  },
  error: {
    recommended: null,
    finished: null,
    selected: null,
  },
};

export const fetchRecommendedBooks = createAsyncThunk(
  "books/fetchRecommended",
  async () => {
    const res = await axios.get<Book[]>(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    );
    return res.data;
  }
);

// Thunk for finished books
export const fetchFinishedBooks = createAsyncThunk(
  "books/fetchFinishedBooks",
  async () => {
    const res = await axios.get<Book[]>("/api/books/finished");
    return res.data;
  }
);

export const fetchSelectedBooks = createAsyncThunk(
  "books/fetchSelectedBooks",
  async () => {
    const res = await axios.get<Book[]>(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );
    return res.data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedBooks.pending, (state) => {
        state.loading.recommended = true;
        state.error.recommended = null;
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.loading.recommended = false;
        state.recommended = action.payload;
      })
      .addCase(fetchRecommendedBooks.rejected, (state, action) => {
        state.loading.recommended = false;
        state.error.recommended =
          action.error.message ?? "Something went wrong";
      })
      .addCase(fetchFinishedBooks.pending, (state) => {
        state.loading.finished = true;
        state.error.finished = null;
      })
      .addCase(fetchFinishedBooks.fulfilled, (state, action) => {
        state.loading.finished = false;
        state.finished = action.payload;
      })
      .addCase(fetchFinishedBooks.rejected, (state, action) => {
        state.loading.finished = false;
        state.error.finished =
          action.error.message ?? "Error fetching finished books";
      })
      .addCase(fetchSelectedBooks.pending, (state) => {
        state.loading.selected = true;
        state.error.selected = null;
      })
      .addCase(fetchSelectedBooks.fulfilled, (state, action) => {
        state.loading.selected = false;
        state.selected = action.payload;
      })
      .addCase(fetchSelectedBooks.rejected, (state, action) => {
        state.loading.selected = false;
        state.error.selected =
          action.error.message ?? "Error fetching selected books";
      });
  },
});

export default booksSlice.reducer;
