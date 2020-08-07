import React from 'react';

const SideMenuWrapper = (props) => {
    return (
            <div
                className={`side-menu-wrapper ${props.showSideBar ? 'show' : 'hide'}`}
                onClick={props.toogleSideMenu}>
                {props.children}
            </div>
    );
}

export default SideMenuWrapper;