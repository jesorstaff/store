import { FC, ReactNode } from 'react'
import { Header } from '@/components/header'
import Sidebar from '@/components/sidebar'
import CatalogFilters from '@/components/catalogFilters'

interface LayoutProps {
    children: ReactNode
    rightSidebar?: boolean
}

const SidebarLayout: FC<LayoutProps> = ({ children, rightSidebar = true }) => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="w-full p-10">{children}</div>
                {rightSidebar && <CatalogFilters />}
            </div>
        </>
    )
}

export default SidebarLayout
