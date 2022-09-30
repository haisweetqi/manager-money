import apiService from "../../../services/axiosConfig"

const CategoryService = {
    getListCategory() {
        return apiService.get("/category/list")
    },
    addCategory(params: any) {
        return apiService.post("/category/create", params)
    },
    updateCategory(id: any, params: any) {
        return apiService.put(`/category/${id}/update`, params)
    },
    deleteCategory(id: any) {
        return apiService.delete(`category/${id}/delete`)
    }
}

export default CategoryService
