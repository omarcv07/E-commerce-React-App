import React from 'react';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { connect } from 'react-redux'; 
import EmptyCategoryPage from '../../components/EmptyCategoryPage'
import ProductCard from '../../components/ProductCard'

const Sale = (props) => {
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
        productsProps: state.products.filter(product => product.sale === true)
    };
}

export default connect(mapStateToProps)(Sale);