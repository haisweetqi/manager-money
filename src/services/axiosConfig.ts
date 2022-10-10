import axios, { AxiosRequestConfig } from "axios"
import apiURL from "./apiURL"

const apiConfig = axios.create({
    baseURL: apiURL.baseURl,
    headers: { "Content-Type": "application/json" }
})

apiConfig.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    error => Promise.reject(error)
)

apiConfig.interceptors.response.use(
    (response: AxiosRequestConfig) => {
        return response
    },
    (error: any) => {
        const { status } = error.response
        console.log({ status })


        if (status === 401) {
            window.location.href = '/login'
            return

        }

        return error.response
    }
)

const apiService = {
    post(urlApi: string, params?: any) {
        return apiConfig
            .post(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    patch(urlApi: string, params?: any) {
        return apiConfig
            .patch(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    put(urlApi: string, params?: any) {
        return apiConfig
            .put(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    get(urlApi: string) {
        return apiConfig
            .get(urlApi)
            .then(response => response)
            .catch(error => error)
    },
    delete(urlApi: string) {
        return apiConfig
            .delete(urlApi)
            .then(response => response)
            .catch(error => error)
    }
}

export default apiService
