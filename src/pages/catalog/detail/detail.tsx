import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useStore from '@/store/store'
import { IProducts } from '@/interfaces'
import SidebarLayout from '@/layouts/sidebarLayout'
import Breadcrumbs from '@/components/breadcrumbs'

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

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        console.log('cart', typeof cart)
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <SidebarLayout rightSidebar={false}>
            <Breadcrumbs />
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
                        {product?.new && (
                            <div className="mr-3 bg-white rounded-md p-2">
                                NEW
                            </div>
                        )}
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
                    <div>
                        <select name="size" id="size">
                            {Object.keys(product?.sizes || {}).map(
                                (size, index) => {
                                    return (
                                        <option key={index} value={size}>
                                            {size}
                                        </option>
                                    )
                                }
                            )}
                        </select>
                    </div>
                    <div>
                        <button
                            onClick={handleAddToCart}
                            className="bg-black text-white px-4 py-2 rounded-md"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </main>
        </SidebarLayout>
    )
}

export default Detail
