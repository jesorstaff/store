import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import CatalogPage from '@/pages/catalog'

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path={'/catalog'} element={<CatalogPage />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter
