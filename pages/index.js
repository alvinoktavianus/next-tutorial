import Home from './home'
import { pageRequest } from '../slice/homeSlice'
import { wrapper } from '../app/store'
import { END } from 'redux-saga'

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    store.dispatch(pageRequest())
    store.dispatch(END)

    await store.homeSagaTask.toPromise()

    return { props: {} }
  },
)

export default Home
