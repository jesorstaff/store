import { Outlet, useParams } from 'react-router'

const Detail = () => {
    const { productId } = useParams()
    return (
        <>
            <h1>{productId}</h1>
            <p>Product ID: {productId}</p>
            <Outlet />
        </>
    )
}

export default Detail
