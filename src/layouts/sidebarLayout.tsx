import { FC, ReactNode } from 'react'
import { Header } from '@/components/header'
import Sidebar from '@/components/sidebar'

interface LayoutProps {
    children: ReactNode
}

const SidebarLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="w-full p-5">{children}</div>
            </div>
        </>
    )
}

export default SidebarLayout
