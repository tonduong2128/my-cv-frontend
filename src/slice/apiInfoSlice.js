import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Api from '../axios/Api.mjs';

const getInfoById = createAsyncThunk(
  'api/getInfoById',
  async (userId, thunkAPI) => {
    const response = await Api.getInfo(userId);
    var data = response.data[0];
    data.description = data?.description ? JSON.parse(data.description):[];
    return data;
  }
)


export const apiInfoSlice = createSlice({
  name: 'api',
  initialState: {
    info: {}
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getInfoById.fulfilled, (state, action) => {
      state.info = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
// export const { } = apiInfoSlice.actions;
export { getInfoById };
export default apiInfoSlice.reducer