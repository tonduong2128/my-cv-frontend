import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../axios/Api.mjs';

const getContactById = createAsyncThunk('api/getContactById', async (userId, thunkAPI) => {
    const response = await Api.getContact(userId);
    const resuilt = response.data[0] ? response.data[0].content : [];
    return JSON.parse(resuilt);
});

export const apiContactSlice = createSlice({
    name: 'api',
    initialState: {
        contact: [],
        isLoaded: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getContactById.pending, (state, action) => {
            state.isLoaded = false;
        });
        builder.addCase(getContactById.fulfilled, (state, action) => {
            state.isLoaded = true;
            state.contact = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const {} = apiContactSlice.actions;
export { getContactById };
export default apiContactSlice.reducer;
