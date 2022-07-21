import axios from 'axios'

const client = axios.create({
  baseURL: 'https://donkeymailerwebapi.herokuapp.com'
})

const refreshToken = async () => {
  const { data } = await client.post('/authentication/token/refresh', {
    refresh: localStorage.getItem('refresh')
  })
  localStorage.setItem('token', data.access)
  return data.access
}

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
    if (error.response.status === 401) {
      const token = await refreshToken()
      // eslint-disable-next-line
      if (token) {
        return await client(error.config)
      }
    }
    if (error.response.status === 403) {
      localStorage.removeItem('token')
      window.location.reload()
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
