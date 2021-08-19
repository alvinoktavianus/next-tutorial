import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  withCredentials: true,
})

export const setupInterceptor = () => {
  instance.interceptors.request.use(
    value => {
      value.params['api_key'] = '9d3042ea00b60523647350b52a57b7c1'
      return value
    },
    error => {
      return Promise.reject(error)
    },
  )
}
