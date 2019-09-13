import axios from 'axios'

const api = axios.create({
  baseURL: 'https://francielle-api.herokuapp.com'
})

api.interceptors.response.use(response => response.data || response)

export default api
