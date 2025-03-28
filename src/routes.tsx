import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import CatalogPage from '@/pages/catalog'
import Detail from '@/pages/catalog/detail/detail.tsx'
import Cart from '@/pages/cart'
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="catalog" element={<CatalogPage />} />
                <Route path="catalog/:categoryName" element={<CatalogPage />} />
                <Route
                    path="catalog/:categoryName/:subcategoryName"
                    element={<CatalogPage />}
                />
                <Route
                    path="catalog/:categoryName/:subcategoryName/:productSlug"
                    element={<Detail />}
                />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<p>Page Not Found</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
