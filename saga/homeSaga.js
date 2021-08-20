import { takeLatest, put } from 'redux-saga/effects'
import { pageRequest, setMovies } from '../slice/homeSlice'

export function* pageRequestEffect() {
  console.log('home saga page request')
  yield put(setMovies([{}, {}, {}, {}]))
}

export default function* homeSaga() {
  yield takeLatest(pageRequest.type, pageRequestEffect)
}
