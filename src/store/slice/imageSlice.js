import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase/config';

const initialState = {
  imageUrl: '',
  state: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const uploadImage = createAsyncThunk('image/upload', async (file) => {
  const storageRef = ref(storage, `photo/${nanoid()}`);
  const snapshot = await uploadBytes(storageRef, file);

  return await getDownloadURL(storageRef, snapshot.metadata.fullPath);
});

const imageSlice = createSlice({
  name: 'image',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.state = 'loading';
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.state = 'succeeded';
        state.currentImage = action.payload;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.state = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectImageUrl = (state) => state.image.imageUrl;
export const selectImageState = (state) => state.image.state;
export const selectImageError = (state) => state.image.error;

export default imageSlice.reducer;
