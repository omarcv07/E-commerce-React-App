import React, { Fragment } from 'react';
import MenuItem from '../UI/Menu/MenuChildren';

const MenuComponent = () => {
    return (
        <Fragment>
            <MenuItem linkTo={'/home'}>Home</MenuItem>
            <MenuItem linkTo={'/men'}>Men</MenuItem>
            <MenuItem linkTo={'/women'}>Women</MenuItem>
            <MenuItem linkTo={'/kids'}>Kids</MenuItem>
            <MenuItem linkTo={'/sale'}>Sale</MenuItem>
            <MenuItem linkTo={'/cart'}>Cart</MenuItem>
        </Fragment>
    );
}

export default MenuComponent;