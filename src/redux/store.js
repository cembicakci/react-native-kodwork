import { configureStore } from '@reduxjs/toolkit'
import favouriteSlice  from '../redux/slice/FavouriteSlice'

export const store = configureStore({
    reducer: {
        favourite: favouriteSlice,
    },
})