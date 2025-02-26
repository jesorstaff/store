import React, { useEffect } from 'react'
import useStore from '@/store/store'
import { useParams } from 'react-router'
import { ICatalog, ISubcategories } from '@/interfaces'
import SidebarLayout from '@/layouts/sidebarLayout'
import Card from './card'

const CatalogPage = () => {
    const { catalog, fetchCatalogStore } = useStore()
    const { categoryName, subcategoryName } = useParams()
    // const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc')

    // const handleSortBy = (sort: 'asc' | 'desc') => {
    //     setSortBy(sort)
    // }

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

    if (subcategory && category) {
        return (
            <SidebarLayout>
                <Heading text={subcategory?.categoryName || ''} />
                <div className="grid grid-cols-3 gap-4 mt-10">
                    {subcategory.products?.map((product) => (
                        <Card
                            key={product.productId}
                            product={product}
                            category={category}
                            subcategory={subcategory}
                        />
                    ))}
                </div>
            </SidebarLayout>
        )
    } else if (category) {
        return (
            <SidebarLayout>
                <Heading text={category?.categoryName || ''} />
                <div className="grid grid-cols-3 gap-4 mt-10">
                    {category?.subcategories?.map((cat) => (
                        <React.Fragment key={cat.categoryId}>
                            {cat?.products?.map((product) => (
                                <Card
                                    key={product.productId}
                                    product={product}
                                    category={category}
                                    subcategory={cat}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </SidebarLayout>
        )
    } else {
        return (
            <SidebarLayout>
                <Heading text={'Catalog'} />
                <div className="grid grid-cols-3 gap-4 mt-10">
                    {catalog.flatMap(
                        (item) =>
                            item.subcategories?.flatMap((sub) =>
                                sub.products?.map((product) => (
                                    <Card
                                        key={product.productId}
                                        product={product}
                                        category={item}
                                        subcategory={sub}
                                    />
                                ))
                            ) || []
                    )}
                </div>
            </SidebarLayout>
        )
    }
}

const Heading = (props: { text: string }) => {
    const { text } = props
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{text}</h1>
            <SortBy />
        </div>
    )
}

const SortBy = () => {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <div>Sort By</div>
            {true ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            )}
        </div>
    )
}

export default CatalogPage
