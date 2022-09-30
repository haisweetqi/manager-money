import apiService from "../../../services/axiosConfig"

const SpendingService = {
    getListSpending() {
        apiService.get("/spending/list")
    },
    addSpending(params: any) {
        apiService.post("/spending/create", params)
    },
    updateSpending(id: any, params: any) {
        apiService.put(`/spending/${id}/update`, params)
    },
    deleteSpending(id: any) {
        apiService.delete(`spending/${id}/delete`)
    }
}

export default SpendingService
