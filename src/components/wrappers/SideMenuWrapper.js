import React from 'react';

const SideMenuWrapper = ({ showSideBar, toogleSideMenu, children}) => {
    return (
            <div
                className={`side-menu-wrapper ${showSideBar ? 'show' : 'hide'}`}
                onClick={toogleSideMenu}>
                {children}
            </div>
    );
}

export default SideMenuWrapper;