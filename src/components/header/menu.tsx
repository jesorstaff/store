import { NavLink } from 'react-router'

const Menu = () => {
    return (
        <nav className="flex items-center gap-5">
            {menuList.map((item, id) => (
                <NavLink
                    to={item.link}
                    key={id}
                    className={({ isActive }) =>
                        `${isActive ? 'border-b-1' : 'border-b-transparent border-b-1'}`
                    }
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    )
}

type TypeMenuList = {
    id?: number
    name: string
    link: string
}

const menuList: TypeMenuList[] = [
    {
        name: 'Catalog',
        link: '/catalog',
    },
    {
        name: 'Women',
        link: '/catalog/women',
    },
    {
        name: 'Men',
        link: '/catalog/men',
    },
    {
        name: 'Accessories',
        link: '/catalog/accessories',
    },
    {
        name: 'Sports',
        link: '/catalog/sports',
    },
]

export { Menu }
