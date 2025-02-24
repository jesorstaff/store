import React, { Fragment } from 'react'
import SidebarLayout from '@/layouts/sidebarLayout'
import { Outlet } from 'react-router'
import useStore from '@/store/store'
import { useEffect } from 'react'
import { NavLink } from 'react-router'
import { useParams } from 'react-router'
import { ICatalog, ISubcategories } from '@/interfaces'

const CatalogPage = () => {
    const { catalog, fetchCatalogStore, catalogIsLoading } = useStore()
    const { categoryName, subcategoryName, productId } = useParams()

    console.log('categoryName', categoryName)
    console.log('subcategoryName', subcategoryName)
    console.log('productId', productId)

    useEffect(() => {
        fetchCatalogStore()
    }, [fetchCatalogStore])

    const category: ICatalog | undefined = catalog.find((cat) => {
        return cat.categoryName.toLowerCase() === categoryName?.toLowerCase()
    })

    const subcategory: ISubcategories | undefined =
        category?.subcategories?.find((sub) => {
            return (
                sub.categoryName.toLowerCase() ===
                subcategoryName?.toLowerCase()
            )
        })

    console.log('catalog +++', catalog)
    console.log('category ===', category)
    console.log('subcategory ~~~', subcategory)

    return (
        <SidebarLayout>
            <h1>Catalog Page</h1>
            <div className="flex flex-row justify-around items-center py-5">
                {catalog.map((item) => (
                    <div key={item.categoryId}>
                        <NavLink
                            to={`/catalog/${item.categoryName.toLocaleLowerCase()}`}
                            className="inline-flex p-2 rounded-2xl bg-blue-950 text-white"
                        >
                            <p>{item.categoryName}</p>
                            <p>{item.categoryId}</p>
                        </NavLink>
                    </div>
                ))}
            </div>

            <div className="flex">
                {category?.subcategories?.map((cat) => (
                    <React.Fragment key={cat.categoryId}>
                        {cat?.products?.map((product) => (
                            <div className="w-1/3" key={product.productId}>
                                {product.productName}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <Outlet />
        </SidebarLayout>
    )
}

export default CatalogPage
