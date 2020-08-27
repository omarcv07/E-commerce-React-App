import React, { Fragment } from 'react';
import MenuFather from '../UI/Menu/MenuFather';
import MenuComponent from './MenuComponent';

const SideBar = () => {
    return (
        <Fragment>
            <MenuFather menuClasses="nav flex-column">
                <span className="navbar-brand justify-content-center d-flex m-0 bg-black text-white" href="/">Brawels</span> 
                <MenuComponent />
            </MenuFather>
        </Fragment>
    );
}

export default SideBar



