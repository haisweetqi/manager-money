import apiService from "../../../services/axiosConfig"

const ChangePassService = {
    changePassApi(params: any) {
        return apiService.post("/auth/change-password", params)
    }
}
export default ChangePassService
