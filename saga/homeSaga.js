import { takeLatest, put, call } from 'redux-saga/effects'
import { pageRequest, setMovies } from '~/slice/homeSlice'
import { POPULAR_MOVIES_V3, BASE_IMAGE_W500_URL } from '~/app/api'
import axios from '~/app/axios'
import _ from 'lodash'

export function* pageRequestEffect() {
  try {
    const response = (yield call(axios.get, POPULAR_MOVIES_V3, {
      params: { page: 1 },
    })).data

    const modifiedMovies = _.map(response.results, v => {
      return {
        imageUrl: `${BASE_IMAGE_W500_URL}${v.poster_path}`,
        id: v.id,
        title: v.title,
        popularity: v.popularity,
      }
    })

    yield put(setMovies(modifiedMovies))
  } catch (e) {
    console.log(e)
  }
}

export default function* homeSaga() {
  yield takeLatest(pageRequest.type, pageRequestEffect)
}
