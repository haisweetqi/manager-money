import apiService from "../../../services/axiosConfig"

const SpendingService = {
    getListSpending() {
        return apiService.get("/spending/list")
    },
    addSpending(params: any) {
        return apiService.post("/spending/create", params)
    },
    updateSpending(id: any, params: any) {
        return apiService.put(`/spending/${id}/update`, params)
    },
    deleteSpending(id: any) {
        return apiService.delete(`spending/${id}/delete`)
    }
}

export default SpendingService
