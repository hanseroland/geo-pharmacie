import axios from 'axios'

const BASE_AXIOS_URL = "http://@ip_server/web_site/apiPharm";


export const publiqueRequest = axios.create({
    baseURL:BASE_AXIOS_URL
});
  
