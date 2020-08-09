import React from 'react';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { connect } from 'react-redux'; 
import ProductCard from '../../components/ProductCard'
import EmptyCategoryPage from '../../components/EmptyCategoryPage'


const Women = (props) => {
    let products = <EmptyCategoryPage />


    if (props.productsProps.length > 0) {
        products = props.productsProps.map(product => {
            return (
                <ProductCard
                    key={product.key}
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
        productsProps: state.products.filter(product => product.category === 'women')
    };
}

export default connect(mapStateToProps)(Women);