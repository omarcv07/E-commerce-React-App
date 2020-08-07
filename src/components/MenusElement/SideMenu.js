import React, { Fragment } from 'react';
import MenuFather from '../UI/Menu/MenuFather';
import MenuComponent from './MenuComponent';

const SideBar = (props) => {
    return (
        <Fragment>
            <MenuFather menuClasses="nav flex-column">
                <span className="navbar-brand justify-content-center d-flex" href="/">Brawels</span> 
                <MenuComponent />
            </MenuFather>
        </Fragment>
    );
}

export default SideBar



