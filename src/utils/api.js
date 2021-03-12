import axios from 'axios'

const API = axios.create ({
    baseURL: 'http://api.divan-shop.loc/jsonapi/',
    headers: {Accept: 'application/vnd.api+json'}
})

export default API