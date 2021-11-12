import axios from 'axios'

const BASE_AXIOS_URL = "http://192.168.1.10/web_site/apiPharm";


export const publiqueRequest = axios.create({
    baseURL:BASE_AXIOS_URL
});
  