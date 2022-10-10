import apiService from "../../../services/axiosConfig"

const SendMailService = {
    sendMailForgotPassword(params: any) {
        return apiService.post("/mail/forgot-password", params)
    }
}
export default SendMailService
