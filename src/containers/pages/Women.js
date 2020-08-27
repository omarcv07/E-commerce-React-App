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