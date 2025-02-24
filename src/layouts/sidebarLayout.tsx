import { FC, ReactNode } from 'react'
import { Header } from '@/components/header'
import Sidebar from '@/components/sidebar'
import CatalogFilters from '@/components/catalogFilters'

interface LayoutProps {
    children: ReactNode
}

const SidebarLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="w-full p-10">{children}</div>
                <CatalogFilters />
            </div>
        </>
    )
}

export default SidebarLayout
