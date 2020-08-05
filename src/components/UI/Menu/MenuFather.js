import React from 'react';

const MenuFather = ({ menuClasses, children }) => {
    return (
        <ul className={menuClasses}>
            {children}
        </ul>
    );
}

export default MenuFather;