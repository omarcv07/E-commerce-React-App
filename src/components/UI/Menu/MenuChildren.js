import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ linkTo, children }) => {
    return (
        <li className='nav-item px-3'>
            <NavLink
                className='nav-link'
                to={linkTo}>
                <span data-content={children}>{children}</span>
            </NavLink>
        </li>
    )
}

export default MenuItem;