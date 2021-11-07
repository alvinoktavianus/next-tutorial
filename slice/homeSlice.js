import { createAction, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.movies = action.payload.home.movies
    },
  },
})

export const pageRequest = createAction(`${slice.name}/pageRequest`)

export const { setMovies } = slice.actions

export default slice.reducer
