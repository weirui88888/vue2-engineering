import axios from 'axios'
const baseURL = process.env.VUE_APP_AXIOS_PREFIX
const instance = axios.create({
  baseURL,
  timeout: 1000
})
export default instance
