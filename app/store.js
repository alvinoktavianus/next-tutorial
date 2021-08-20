import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'

import homeReducer from '../slice/homeSlice'

import homeSaga from '../saga/homeSaga'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }).concat(sagaMiddleware)
    },
    reducer: {
      home: homeReducer,
    },
  })

  store.sagaTask = sagaMiddleware.run(homeSaga)

  return store
}

export const wrapper = createWrapper(makeStore)
