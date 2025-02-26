import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

const Breadcrumbs = () => {
    const location = useLocation()
    const pathname = location.pathname
    const pathnames = pathname.split('/').filter((item) => item)

    return (
        <div className="flex items-center gap-2">
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
                const formattedName = name
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')

                return (
                    <React.Fragment key={index}>
                        <Link to={routeTo}>{formattedName}</Link>
                        {index < pathnames.length - 1 && (
                            <span className="text-gray-500">•</span>
                        )}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Breadcrumbs
