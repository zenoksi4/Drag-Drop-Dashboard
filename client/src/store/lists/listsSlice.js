import { createSlice } from '@reduxjs/toolkit';

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