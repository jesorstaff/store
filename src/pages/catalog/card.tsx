import { ICatalog, IProducts, ISubcategories } from '@/interfaces'
import { NavLink } from 'react-router'
import image1 from '@/assets/products/product-1.jpg'

type CardProps = {
    product: IProducts
    category: ICatalog
    subcategory: ISubcategories
}

const Card = ({ product, category, subcategory }: CardProps) => {
    return (
        <div key={product.productId}>
            <NavLink
                to={`/catalog/${category?.categoryName.toLocaleLowerCase()}/${subcategory?.categoryName.toLocaleLowerCase()}/${product.productSlug}`}
            >
                {product.productImage ? (
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full h-92 rounded-2xl object-cover object-[50%_15%]"
                    />
                ) : (
                    <img
                        src={image1}
                        alt={product.productName}
                        className="w-full h-92 rounded-2xl object-cover object-[50%_15%]"
                    />
                )}

                <div className="p-8">
                    <div className="flex items-center justify-between">
                        <div className="font-bold">{product.productName}</div>
                        <div className="font-bold">
                            {product.price ? '$ ' + product.price : ''}
                        </div>
                    </div>
                    <div className="mt-5 text-font-light">
                        {subcategory.categoryName}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Card
