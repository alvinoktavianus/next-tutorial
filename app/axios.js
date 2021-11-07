import axios from 'axios'
import { BASE_URL } from './api'

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

instance.interceptors.request.use(
  value => {
    value.params = {
      ...value.params,
      api_key: '9d3042ea00b60523647350b52a57b7c1',
    }

    return value
  },
  error => {
    return Promise.reject(error)
  },
)

export default instance
