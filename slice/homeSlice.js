import { createAction, createSlice } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

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
      console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload.subject,
      }
    },
  },
})

export const pageRequest = createAction(`${slice.name}/pageRequest`)

export const { setMovies } = slice.actions

export default slice.reducer
