import axios from "axios"
import apiURL from "./apiURL"

const apiConfig = axios.create({
    baseURL: apiURL.baseURl,
    headers: { "Content-Type": "application/json" }
})

const apiService = {
    post(urlApi: string, params?: any) {
        return apiConfig
            .post(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    patch(urlApi: string, params?: any) {
        return apiConfig
            .post(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    put(urlApi: string, params?: any) {
        return apiConfig
            .post(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    get(urlApi: string) {
        return apiConfig
            .post(urlApi)
            .then(response => response)
            .catch(error => error)
    },
    delete(urlApi: string) {
        return apiConfig
            .post(urlApi)
            .then(response => response)
            .catch(error => error)
    }
}

export default apiService