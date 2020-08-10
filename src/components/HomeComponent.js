import React from 'react';
import EmptyCategoryPage from './EmptyCategoryPage'
import { connect } from 'react-redux'; 
import SecondaryLayout from '../layouts/SecondaryLayout'
import ProductCard from './ProductCard'

const Home = (props) => {
    let products = <EmptyCategoryPage />


    if (props.productsProps.length > 0) {
        products = props.productsProps.map(product => {
            return (
                <ProductCard
                    key={product.id}
                    productImage={product.img}
                    productName={product.name}
                    productSale={product.sale}
                    productPrice={product.price}
                />
            );
        })
    } 
    return (
        <SecondaryLayout>
            {products}
        </SecondaryLayout>
    );
}


const mapStateToProps = state => {
    return {
        productsProps: state.products
    };
}

export default connect(mapStateToProps)(Home);