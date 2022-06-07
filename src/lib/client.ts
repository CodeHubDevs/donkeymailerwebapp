import axios from 'axios'

const client = axios.create({
  baseURL: 'https://donkeymailerwebapi-38gbu.ondigitalocean.app'
})

// TODO Add client interceptors on request and response

export default client
