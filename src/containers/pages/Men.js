import React from 'react';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { connect } from 'react-redux'; 
import EmptyCategoryPage from '../../components/EmptyCategoryPage'
import ProductCard from '../../components/ProductCard'

const Men = (props) => {

    const { productsProps } = props;

    let products = <EmptyCategoryPage />

    if (productsProps) {
        const menProducts = productsProps.filter(product => product.category === 'men');

        products = menProducts.map(product => {
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
        productsProps: state.products
    };
}

export default connect(mapStateToProps)(Men);