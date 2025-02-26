import { Menu } from './menu'
import { NavLink } from 'react-router'

const Header = () => {
    return (
        <div className="flex justify-between px-10 py-5 bg-transparent border-b-1 border-gray-300 text-font-bold font-bold">
            <NavLink to="/" className="logo">
                Shop
            </NavLink>
            <Menu />
            <div className="flex items-center gap-5">
                <div>Account</div>
                <NavLink to="/cart">Cart</NavLink>
            </div>
        </div>
    )
}

export { Header }
