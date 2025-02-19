import { Menu } from './menu'

const Header = () => {
    return (
        <div className="flex justify-between px-10 py-5 bg-transparent border-b-1 border-gray-300">
            <div className="logo">Shop</div>
            <Menu />
            <div className="flex items-center gap-5">
                <div>Account</div>
                <div>Bag</div>
            </div>
        </div>
    )
}

export { Header }
