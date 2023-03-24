import { configureStore } from '@reduxjs/toolkit'
import listsSlice from './lists/listsSlice'

export const store = configureStore(({
    reducer: {
        lists: listsSlice
    }
}))