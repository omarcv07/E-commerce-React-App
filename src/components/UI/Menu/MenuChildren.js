import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ linkTo, children }) => {
    return (
        <li className='nav-item'>
            <NavLink
                className='nav-link'
                to={linkTo}>
                {children}</NavLink>
        </li>
    )
}

export default MenuItem;