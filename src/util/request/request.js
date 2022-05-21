import axios from "axios";

export const request = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});