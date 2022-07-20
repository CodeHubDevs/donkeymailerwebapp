import axios from 'axios'

const client = axios.create({
  baseURL: 'https://donkeymailerwebapi.herokuapp.com'
})

client.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token')

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

client.interceptors.response.use(
  (response: any) => {
    return response
  },
  async (error: any) => {
    if (error.response.status !== 404 && error.response.status !== 500) {
      localStorage.removeItem('token')
    }

    if (error.response.status === 403) {
      localStorage.removeItem('token')
    }

    return await Promise.reject(error)
  }
)

export const attachToken = () => {
  const token = localStorage.getItem('token')

  if (token !== null) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}

export const detachToken = () => {
  delete client.defaults.headers.common.Authorization
}

export default client
