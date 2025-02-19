import { FC, ReactNode } from 'react'
import { Header } from '@/components/header'

interface LayoutProps {
    children: ReactNode
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-app-bg h-screen overflow-hidden">
            <Header />
            <div className="max-w-screen-2xl w-full mx-auto px-7 my-5 min-h-screen">
                {children}
            </div>
        </div>
    )
}

export default MainLayout
