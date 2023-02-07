import axios from 'axios'

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/',
})

export default httpRequest
