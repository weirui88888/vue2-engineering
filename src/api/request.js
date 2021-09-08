import axios from 'axios'
const baseURL = process.env.VUE_APP_AXIOS_PREFIX
const instance = axios.create({
  baseURL,
  timeout: 1000
})

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // config.headers.authorization = 'Butter e40e6a3e523be7c725d515ce0ade7347'
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

export default instance
