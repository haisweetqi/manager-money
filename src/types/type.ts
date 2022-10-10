interface DataTypeCategory {
    id: number
    name: string
    userId: number
}

interface DataTypeSpending {
    id: number
    name: string
    categoryId: number
    price: number
    description: string
}

export type { DataTypeCategory, DataTypeSpending }
