import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import listsService from '../services/listsService';



export const getLists = createAsyncThunk('GET_LISTS', async (_, thunkAPI) => {
    try {

        return await listsService.getLists();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const createList = createAsyncThunk('CREATE_LISTS', async (Title, thunkAPI) => {
    try {

        return await listsService.createLists(Title);

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
    },
    extraReducers: (builder) => {
        builder.addCase(getLists.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getLists.fulfilled, (state, action) => {
            state.isLoading = false;
            state.lists = action.payload;
        });
        builder.addCase(getLists.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.lists = null;
        });


        builder.addCase(createList.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(createList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.lists.push(action.payload);
        });
        builder.addCase(createList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.lists = null;
        });
    },
    reducers: {
        onDragCard: listsService.updateLists
    }
});

export const { onDragCard } = listsSlice.actions;

export default listsSlice.reducer;