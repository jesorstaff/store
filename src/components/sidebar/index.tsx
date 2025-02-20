import { useEffect, useState } from 'react'
import { ISubcategories } from '@/interfaces'
import sportImg from '/sport-article.jpg'
import useStore from '@/store/store'

const Sidebar = () => {
    const [open, setOpen] = useState<number>(0)

    const { catalog, fetchCatalogStore } = useStore()

    useEffect(() => {
        fetchCatalogStore()
    }, [fetchCatalogStore])

    const openSubCategories = (index: number) => {
        setOpen(index)
    }

    return (
        <>
            <aside className="w-full max-w-xs border-r-1 border-gray-300 p-10">
                <menu className="mb-12!">
                    {catalog.map((category, index) => (
                        <div key={category.categoryId}>
                            <div
                                className="flex justify-between items-center py-3 border-b-1 border-gray-300 text-font-bold font-bold cursor-pointer"
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
                                    className={`flex flex-col gap-3 opacity-0 h-0 transition-all ${open === index ? 'opacity-100 h-max py-10 overflow-visible' : 'overflow-hidden'}`}
                                >
                                    {category.subcategories.map(
                                        (subcategory: ISubcategories) => (
                                            <li
                                                className="flex justify-between items-center"
                                                key={subcategory.categoryId}
                                            >
                                                <a
                                                    href="/test"
                                                    className="text-font-light font-bold"
                                                >
                                                    {subcategory.categoryName}
                                                </a>
                                                {subcategory.products && (
                                                    // <span className="bg-gray-100 rounded-full py-3 px-3 h-8 text-center text-font-bold font-bold">
                                                    <span className="bg-gray-100 rounded-full py-1 px-4 text-center font-bold">
                                                        {
                                                            subcategory.products
                                                                .length
                                                        }
                                                    </span>
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </menu>
                {/* <div className="rounded-xl h-80 bg-gray-400 overflow-hidden relative"> */}
                <div className="rounded-xl h-80 overflow-hidden relative">
                    <a
                        href="#"
                        className="flex items-end absolute left-0 top-0 right-0 bottom-0"
                    >
                        <img
                            src={sportImg}
                            alt="sport article"
                            className="flex absolute object-cover -z-1 w-full h-full"
                        />
                        <div className="flex items-center justify-between w-full text-white font-bold pb-7 px-7">
                            <div>New Sports</div>
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
                                <line x1="2" y1="12" x2="15" y2="12"></line>
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
