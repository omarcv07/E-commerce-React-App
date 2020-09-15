import React, { Fragment } from 'react';
import MenuComponent from './MenuComponent'
import MenuFather from '../UI/Menu/MenuFather';
import NavAuthentication from './AuthenticationMenu';
import logoBrawels from '../../assets/icons/ecommerce-icon.jpeg'

const Header = (props) => {

    return (
        <Fragment>
            <div className='fixed-top'>
                <NavAuthentication />
                <nav className='navbar navbar-expand-md navbar-light p-3'>
                    <div className='mx-md-5 container-fluid'>
                        <a className='navbar-brand' href='/'><img src={logoBrawels} width={220} /></a>

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