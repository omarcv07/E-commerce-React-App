import React from 'react';
import { connect } from 'react-redux'; 

const ProductDetails = (props) => {

    const { product_details, match } = props;

    const products = product_details.find(product => product.id === parseInt(match.params.productId))


    return (
        <div className='container'>{products.name}</div>
    );
}

const mapStateToProps = state => {
    return {
        product_details: state.products
    };
}

export default connect(mapStateToProps)(ProductDetails);    