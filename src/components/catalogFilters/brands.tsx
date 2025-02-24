import useStore from '@/store/store.ts'

const Brands = () => {
    const { catalog } = useStore()

    const sortedBrands = [
        ...new Set(
            catalog.flatMap(
                (cat) =>
                    cat.subcategories?.flatMap(
                        (sub) =>
                            sub.products?.map((product) => product.brand) ?? []
                    ) ?? []
            )
        ),
    ].sort()

    // console.log('sortedBrands', sortedBrands)

    const open = true
    const index = true

    return (
        <ul
            className={`flex flex-col gap-3 opacity-0 h-0 transition-all ${open === index ? 'opacity-100 h-max py-10 overflow-visible' : 'overflow-hidden'}`}
        >
            {sortedBrands.map((brand, index) => (
                <li className="flex justify-between items-center" key={index}>
                    {brand}
                    <span className="bg-gray-100 rounded-full py-1 px-4 text-center font-bold">
                        10
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Brands
