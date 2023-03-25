import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import listsService from '../services/listsService';


export const getLists = createAsyncThunk('GET_LISTS', async (_, thunkAPI) => {
    try {

        return await listsService.getLists();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const createList = createAsyncThunk('CREATE_LIST', async (Title, thunkAPI) => {
    try {

        return await listsService.createList(Title);

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const deleteList = createAsyncThunk('DELETE_LIST', async (_id, thunkAPI) => {
    try {

        return await listsService.deleteList(_id);

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const createCardList = createAsyncThunk('CREATE_CARD_LIST', async ({listId, titleCard}, thunkAPI) => {
    try {

        return await listsService.createCardList(listId, titleCard);

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const deleteCardList = createAsyncThunk('DELETE_CARD_LIST', async ({listId, cardId}, thunkAPI) => {
    try {

        return await listsService.deleteCardList(listId, cardId);

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
            state.isLoading = true;
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


        builder.addCase(createList.fulfilled, (state, action) => {
            state.lists.push(action.payload);
        });
        builder.addCase(createList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.lists = null;
        });


        builder.addCase(deleteList.fulfilled, (state, action) => {
            state.lists = state.lists.filter((list) => (
                list._id !== action.payload._id
            ))
        });
        builder.addCase(deleteList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.lists = null;
        });


        builder.addCase(createCardList.fulfilled, (state, action) => {
            const addCardToList = state.lists.find(list => list._id === action.payload._id);
            addCardToList.cards = action.payload.cards

        });
        builder.addCase(createCardList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.lists = null;
        });



        builder.addCase(deleteCardList.fulfilled, (state, action) => {
            const addCardToList = state.lists.find(list => list._id === action.payload._id);
            addCardToList.cards = action.payload.cards

        });
        builder.addCase(deleteCardList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.lists = null;
        });
    },
    reducers: {
        onDragCard: listsService.updateLists,
        onSortCard: listsService.sortCards
    }
});

export const { onDragCard, onSortCard } = listsSlice.actions;

export default listsSlice.reducer;