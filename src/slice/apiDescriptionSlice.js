import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../axios/Api.mjs';

const getDescriptionById = createAsyncThunk('api/getDescriptionById', async (userId, thunkAPI) => {
    const response = await Api.getDescription(userId);
    if (response.data) {
        response.data = response.data.map((row) => {
            row.description = JSON.parse(row.description);
            return row;
        });
        return response.data;
    }
    return [];
});

export const apiDescriptionSlice = createSlice({
    name: 'api',
    initialState: {
        description: [],
        isLoaded: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDescriptionById.pending, (state, action) => {
            state.isLoaded = false;
        });
        builder.addCase(getDescriptionById.fulfilled, (state, action) => {
            state.description = action.payload;
            state.isLoaded = true;
        });
    },
});

// Action creators are generated for each case reducer function
// export const { } = apiDescriptionSlice.actions;
export { getDescriptionById };
export default apiDescriptionSlice.reducer;
