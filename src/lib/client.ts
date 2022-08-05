import axios from 'axios'

const client = axios.create({
  baseURL: 'https://donkeymailerwebapi.herokuapp.com'
})

const refreshToken = async () => {
  try {
    const { data } = await client.post('/authentication/token/refresh', {
      refresh: localStorage.getItem('refresh')
    })
    localStorage.setItem('token', data.access)
    return data.access
  } catch (error) {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    window.location.href = '/signin'
    return null
  }
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

export default client
