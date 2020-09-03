import React, { Fragment } from 'react';
import MenuComponent from './MenuComponent'
import MenuFather from '../UI/Menu/MenuFather';
import NavAuthentication from './AuthenticationMenu';

const Header = (props) => {

    return (
        <Fragment>
            <div className='fixed-top'>
                <NavAuthentication />
                <nav className='navbar navbar-expand-md navbar-light p-3'>
                    <div className='mx-5 container-fluid'>
                        <span className='navbar-brand' href='/'>Brawels</span>

                        <button 
                            className='navbar-toggler'
                            onClick={props.toogleSideBar}>
                            <i className='navbar-toggler-icon'></i>
                        </button>

                        <div className={'collapse navbar-collapse'}>
                            <MenuFather menuClasses='navbar-nav ml-auto mt-2 mt-lg-0'>
                                <MenuComponent />
                            </MenuFather>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}

export default Header;

