import { FC } from 'react'
import { IProducts } from '@/interfaces'
import { Outlet } from 'react-router'

interface PropsProductLayout {
    product: IProducts
}

const ProductLayout: FC<PropsProductLayout> = ({ product }) => {
    console.log('product', product)
    return (
        <div>
            {/* {category} */}
            <Outlet />
        </div>
    )
}

export default ProductLayout
