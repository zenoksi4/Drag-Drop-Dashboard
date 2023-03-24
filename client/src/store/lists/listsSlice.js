import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listsService from '../services/listsService';



export const getLists = createAsyncThunk('GET_LISTS', async (_, thunkAPI) => {
    try {

        return await listsService.getLists();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: null,
        isError: false,
        isLoading: false,
        message: ''
    }
});

export default listsSlice.reducer;