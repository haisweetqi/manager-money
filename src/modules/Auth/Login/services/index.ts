import apiService from "../../../services/axiosConfig"

const LoginService = {
    loginApi(params: any) {
        return apiService.post("/auth/login", params)
    }
}

export default LoginService
