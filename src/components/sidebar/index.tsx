import { useEffect, useState } from 'react'
import { fetchCatalog } from '@/api/db.ts'

const Sidebar = () => {
    const [categories, setCategories] = useState({})
    const [open, setOpen] = useState<number>(0)

    useEffect(() => {
        const getCatalogData = async () => {
            try {
                const data = await fetchCatalog()

                setCategories(data)
            } catch (error) {
                console.log(error)
            }
        }

        getCatalogData()
    }, [])

    const openSubCategories = (index: number) => {
        setOpen(index)
    }

    console.log('Object.values(categories)', Object.values(categories))

    return (
        <>
            <aside className="w-full max-w-xs border-r-1 border-gray-100 p-5">
                {Object.values(categories).map(
                    (category: categoryId, index) => (
                        <div key={category.categoryId}>
                            <div
                                className="flex justify-between items-center py-3 border-b-1 border-gray-100"
                                onClick={() => openSubCategories(index)}
                            >
                                {category.categoryName}
                                {category.subcategories && (
                                    <span className="text-gray-400">
                                        {open === index ? (
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
                                    </span>
                                )}
                            </div>
                            {category.subcategories && (
                                <ul
                                    className={`flex flex-col gap-3 opacity-0 h-0 transition-all py-3 ${open === index ? 'opacity-100 h-max' : 'cursor-pointer'}`}
                                >
                                    {category.subcategories.map(
                                        (subcategory) => (
                                            <li
                                                className="flex justify-between"
                                                key={subcategory.categoryId}
                                            >
                                                <a href="#">
                                                    {subcategory.categoryName}
                                                </a>
                                                <span className="bg-gray-100 p-1 border">
                                                    {
                                                        subcategory.products
                                                            .length
                                                    }
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    )
                )}
            </aside>
        </>
    )
}

export default Sidebar
