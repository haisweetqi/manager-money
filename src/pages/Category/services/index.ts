import apiService from "../../../services/axiosConfig"

const CategoryService = {
    getListCategory() {
        apiService.get("/category/list")
    },
    addCategory(params: any) {
        apiService.post("/category/create", params)
    },
    updateCategory(id: any, params: any) {
        apiService.post(`/category/${id}/update`, params)
    },
    deleteCategory(id: any) {
        apiService.post(`category/${id}/delete`)
    }
}

export default CategoryService
