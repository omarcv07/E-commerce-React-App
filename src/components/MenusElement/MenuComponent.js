import React, { Fragment } from 'react';
import MenuItem from '../UI/Menu/MenuChildren';
import { connect } from 'react-redux'; 

const MenuComponent = (props) => {

    const { addedProducts } = props;

    const cartProductCount = addedProducts.reduce((count, curr) => {
        return count + curr.quantity;
    }, 0);

    return (
        <Fragment>
            <MenuItem linkTo={'/home'}>Home</MenuItem>
            <MenuItem linkTo={'/men'}>Men</MenuItem>
            <MenuItem linkTo={'/women'}>Women</MenuItem>
            <MenuItem linkTo={'/kids'}>Kids</MenuItem>
            <MenuItem linkTo={'/sale'}>Sale</MenuItem>
            <MenuItem linkTo={'/cart'}>Cart <span className='badge badge-dark'>{cartProductCount}</span></MenuItem>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        addedProducts: state.addedProducts,
    };
}

export default connect(mapStateToProps)(MenuComponent);