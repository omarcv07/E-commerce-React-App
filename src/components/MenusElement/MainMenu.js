import React, { useState } from 'react';
import MenuComponent from './MenuComponent'
import MenuFather from '../UI/Menu/MenuFather';
// import { SideBar } from '../UI/SideBar'

const Header = (props) => {

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <span className="navbar-brand" href="/">Brawels</span>

            <button 
                className="navbar-toggler"
                onClick={props.toogleSideBar}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={"collapse navbar-collapse"}>
                <MenuFather menuClasses="navbar-nav ml-auto mt-2 mt-lg-0">
                    <MenuComponent />
                </MenuFather>
            </div>
        </nav>
    );
}

export default Header;

