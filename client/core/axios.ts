import axios from 'axios'
import { parseCookies } from 'nookies'
 
axios.default.baseURL = 'http://localhost:3001';

axios.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const { _token } = parseCookies()
        config.headers.Authorization = `Bearer ${_token}`
})