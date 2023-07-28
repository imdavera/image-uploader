import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';

const initialState = {
  currentImage: {},
  state: 'idle', // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
});

export default imageSlice.reducer;
