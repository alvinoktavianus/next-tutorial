import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import homeReducer from '~/slice/homeSlice'

import homeSaga from '~/saga/homeSaga'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => {
      const middleware = getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }).concat(sagaMiddleware)

      if (process.env.NODE_ENV !== 'production') {
        middleware.concat(logger)
      }

      return middleware
    },
    reducer: {
      home: homeReducer,
    },
  })

  store.homeSagaTask = sagaMiddleware.run(homeSaga)

  return store
}

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})
