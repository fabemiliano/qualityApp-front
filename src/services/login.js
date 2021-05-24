import axios from 'axios'


// const baseURL = 'qualityapp-env.eba-nxqb3s83.us-east-2.elasticbeanstalk.com'
const baseURL = process.env.REACT_APP_baseURL

console.log(baseURL)
const loginService = axios.create({ baseURL })

console.log(loginService)
export const login = async (user, password) => loginService.post('/login', {
    user, password
  })

export const createUser = async (user, password) => loginService.put('/login', {
    user, password
  })