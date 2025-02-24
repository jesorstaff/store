export interface IProducts {
    productId: number
    productName: string
    productSlug: string
    productImage?: string
    images?: string[]
    vendor?: number
    price?: number
    sizes?: {
        small: string
        medium: string
        large: string
    }
    color?: {
        hex: string
        name: string
    }[]
    brand?: string
    new?: boolean
    discount?: number
    description?: {
        productStory?: string
        materialInformation?: string
        productHighlights?: string[]
        productDetails?: {
            coolIron: boolean
            doNotBleach: boolean
            doNotDryClean: boolean
            machineWashInCoolWater: boolean
            tumbleDryLowTemperature: boolean
        }
    }
}

export interface ISubcategories {
    categoryId: number
    categoryName: string
    products?: IProducts[]
}

export interface ICatalog {
    categoryId: number
    categoryName: string
    subcategories?: ISubcategories[]
}
