import Brands from '@/components/catalogFilters/brands.tsx'
import Colors from '@/components/catalogFilters/colors.tsx'
import Sizes from '@/components/catalogFilters/sizes.tsx'

const CatalogFilters = () => {
    const open = true
    const index = true
    return (
        <aside className="w-full max-w-xs border-l-1 border-gray-300 p-10">
            <div>Filters</div>
            <div className="flex justify-between items-center py-10 border-b-1 border-gray-300 text-font-bold font-bold cursor-pointer">
                Brand
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
            </div>
            <Brands />
            <Colors />
            <Sizes />
        </aside>
    )
}

export default CatalogFilters
