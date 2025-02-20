import { ICatalog } from '@/interfaces'

const catalog: ICatalog[] = [
    {
        categoryId: 1,
        categoryName: 'Women',
        subcategories: [
            {
                categoryId: 10,
                categoryName: 'Clothing',
                products: [
                    {
                        productId: 100,
                        productName: 'Class Logo Sweatshirt',
                    },
                    {
                        productId: 101,
                        productName: 'Orange Sport Dress',
                    },
                ],
            },
            {
                categoryId: 11,
                categoryName: 'Shoes',
                products: [
                    {
                        productId: 102,
                        productName: 'Class Logo Sweatshirt',
                    },
                ],
            },
        ],
    },
    {
        categoryId: 2,
        categoryName: 'Men',
        subcategories: [
            {
                categoryId: 20,
                categoryName: 'Clothing',
                products: [
                    {
                        productId: 200,
                        productName: 'Class Logo Sweatshirt',
                    },
                ],
            },
        ],
    },
    {
        categoryId: 3,
        categoryName: 'Accessories',
        subcategories: [
            {
                categoryId: 30,
                categoryName: 'belts',
                products: [
                    {
                        productId: 300,
                        productName: 'White belt',
                    },
                ],
            },
        ],
    },
    {
        categoryId: 4,
        categoryName: 'Sports',
        subcategories: [
            {
                categoryId: 40,
                categoryName: 'Cycles',
                products: [
                    {
                        productId: 400,
                        productName: 'helmet',
                    },
                ],
            },
        ],
    },
]

export const fetchCatalog = (): Promise<ICatalog[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(catalog)
        }, 500)
    })
}
