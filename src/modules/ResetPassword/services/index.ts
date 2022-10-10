import apiService from "../../../services/axiosConfig"

const ForgotPasswordService = {
    sendMailForgotPassword(params: any) {
        return apiService.post("/mail/forgot-password", params)
    },
    checkTokenForgotPassword(params: any) {
        return apiService.post("/mail/check-expired-token", params)
    },
    changePasswordRequest(params: any) {
        return apiService.post("/auth/forgot-password", params)
    }
}
export default ForgotPasswordService
