import image1 from '@/assets/products/product-1.jpg'
import image2 from '@/assets/products/product-2.jpg'
import image3 from '@/assets/products/women-3.jpg'
import image4 from '@/assets/products/women-4.jpg'
import image5 from '@/assets/products/men-1.jpg'
import image6 from '@/assets/products/men-2.jpg'
import image7 from '@/assets/products/bike-1.jpg'
import image8 from '@/assets/products/shoes-1.jpg'
import image9 from '@/assets/products/belt-1.jpg'

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
                        productSlug: 'class-logo-sweatshirt',
                        productImage: image1,

                        vendor: 463412412,
                        price: 100,
                        sizes: {
                            small: 'S (4-6)',
                            medium: 'M (8-10)',
                            large: 'L (12-14)',
                        },
                        color: [
                            {
                                hex: '#000000',
                                name: 'Black',
                            },
                            {
                                hex: '#8833FF',
                                name: 'Purple',
                            },
                            {
                                hex: '#FF0000',
                                name: 'Red',
                            },
                        ],
                        brand: 'Strike',
                        new: true,
                        description: {
                            productStory: 'This is a product story',
                            materialInformation:
                                'This is a material information',
                            productHighlights: [
                                'This is a product highlight 1',
                                'This is a product highlight 2',
                                'This is a product highlight 3',
                            ],
                            productDetails: {
                                coolIron: true,
                                doNotBleach: true,
                                doNotDryClean: true,
                                machineWashInCoolWater: true,
                                tumbleDryLowTemperature: true,
                            },
                        },
                    },

                    {
                        productId: 101,
                        productName: 'White Sport Dress',
                        productSlug: 'white-sport-dress',
                        productImage: image2,
                        brand: 'Velox',
                        price: 80,
                    },
                    {
                        productId: 102,
                        productName: 'Sport Style Dress',
                        productSlug: 'sport-style-dress',
                        productImage: image3,
                        brand: 'Apex',
                        price: 80,
                    },
                    {
                        productId: 103,
                        productName: 'Leggings',
                        productSlug: 'leggings',
                        productImage: image4,
                        brand: 'Pulse',
                        price: 80,
                    },
                ],
            },
            {
                categoryId: 11,
                categoryName: 'Shoes',
                products: [
                    {
                        productId: 104,
                        productName: 'Class Logo Sweatshirt',
                        productSlug: 'class-logo-sweatshirt-original',
                        brand: 'Original',
                        price: 129,
                        productImage: image8,
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
                categoryName: 'T-shirts',
                products: [
                    {
                        productId: 200,
                        productName: 'Class Logo Sweatshirt',
                        productSlug: 'class-logo-sweatshirt-lacoste',
                        brand: 'Storm',
                        productImage: image5,
                        price: 100,
                    },
                    {
                        productId: 201,
                        productName: 'Class Logo Sweatshirt',
                        productSlug: 'class-logo-sweatshirt-nike-1',
                        brand: 'Fusion',
                        productImage: image6,
                        price: 200,
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
                categoryName: 'Belts',
                products: [
                    {
                        productId: 300,
                        productName: 'Belt',
                        productSlug: 'belt',
                        brand: 'Strong',
                        productImage: image9,
                        price: 19,
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
                        productName: 'Velocity 550',
                        productSlug: 'velocity-550',
                        brand: 'Velocity',
                        productImage: image7,
                        price: 799,
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
