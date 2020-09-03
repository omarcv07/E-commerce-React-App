import React from 'react';
import EmptyCategoryPage from '../../components/EmptyCategoryPage';
import { connect } from 'react-redux'; 
import ProductCard from '../../components/ProductCard';

const HomeProducts = (props) => {
    let products = <EmptyCategoryPage />


    if (props.productsProps.length > 0) {
        products = props.productsProps.map(product => {
            return (
                <ProductCard
                    category={product.category}
                    key={product.id}
                    productImage={product.img}
                    productName={product.name}
                    productSale={product.sale}
                    productPrice={product.price}
                    productId={product.id}
                />
            );
        })
    } 
    return (
        <div className='container col-12 col-md-8 col-lg-9'>
            <div className='row justify-content-center'>
                <h2 className='home-products-title'>Featured Products</h2>
            </div>
            <div className='row'>                
                {products}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        productsProps: state.products
    };
}

export default connect(mapStateToProps)(HomeProducts);  