import apiService from "../../../services/axiosConfig"

const RegisterService = {
    registerApi(params: any) {
        return apiService.post("/auth/register", params)
    }
}

export default RegisterService
