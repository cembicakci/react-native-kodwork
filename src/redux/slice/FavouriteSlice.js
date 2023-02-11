import { createSlice } from '@reduxjs/toolkit'

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        favouriteJobs: [],
        selectedJob: ''
    },
    reducers: {
        addFavourite: (state, action) => {
            state.favouriteJobs.push(action.payload)
        },
        removeFavourites: (state, action) => {
            state.favouriteJobs = state.favouriteJobs.filter(item => item.id !== action.payload)
        },
        selectJob: (state, action) => {
            state.selectedJob = action.payload
        }
    }
})

export const { addFavourite, removeFavourites, selectJob } = favouriteSlice.actions
export default favouriteSlice.reducer