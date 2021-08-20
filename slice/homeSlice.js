import { createAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
  },
  name: 'home',
})

export const pageRequest = createAction(`${slice.name}/pageRequest`)

export const { setMovies } = slice.actions

export default slice.reducer
