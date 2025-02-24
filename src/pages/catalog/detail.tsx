import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useStore from '@/store/store'
import { IProducts } from '@/interfaces'
import SidebarLayout from '@/layouts/sidebarLayout'

const Detail = () => {
    const [product, setProduct] = useState<IProducts | null>(null)
    const { productSlug } = useParams()
    const { catalog, fetchCatalogStore } = useStore()

    useEffect(() => {
        fetchCatalogStore()
    }, [fetchCatalogStore])

    useEffect(() => {
        const foundProduct = catalog.find((cat) => {
            return cat?.subcategories?.some((sub) => {
                return sub?.products?.some(
                    (prod) => prod.productSlug === productSlug
                )
            })
        })

        if (foundProduct) {
            const subcategory = foundProduct.subcategories?.find((sub) => {
                return sub?.products?.some(
                    (prod) => prod.productSlug === productSlug
                )
            })

            if (subcategory) {
                const currentProduct = subcategory.products?.find(
                    (prod) => prod.productSlug === productSlug
                )
                setProduct(currentProduct || null)
            }
        }
    }, [catalog, productSlug])

    console.log('product', product)

    return (
        <SidebarLayout rightSidebar={false}>
            <div>Home - Women - Clothing - Test</div>
            <main className="mt-10 flex">
                <div className="w-full">
                    <img
                        src={product?.productImage}
                        alt={product?.productName}
                        className="w-200 h-200 object-cover rounded-2xl"
                    />
                </div>
                <div className="w-1/2">
                    <div className="flex items-center">
                        <div className="mr-3 bg-white rounded-md p-2">
                            {product?.new ? 'NEW' : null}
                        </div>
                        <div>
                            {product?.vendor
                                ? `Article: ${product?.vendor}`
                                : null}
                        </div>
                    </div>
                    <div className="mt-20">
                        <h1 className="text-4xl font-bold">
                            {product?.productName}
                        </h1>
                    </div>
                    <div className="flex items-center mt-20">
                        <div className=" text-5xl font-bold">
                            {product?.price ? `$ ${product?.price}` : null}
                        </div>
                        <div className="flex items-center ml-5">
                            {product?.color?.map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{ backgroundColor: color.hex }}
                                        className="w-8 h-8 rounded-full ml-3"
                                    ></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </SidebarLayout>
    )
}

export default Detail
