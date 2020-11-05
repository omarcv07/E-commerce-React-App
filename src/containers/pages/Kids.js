import React from 'react';
import EmptyCategoryPage from '../../components/EmptyCategoryPage'
import { connect } from 'react-redux'; 
import SecondaryLayout from '../../layouts/SecondaryLayout'
import ProductCard from '../../components/ProductCard'

const Kids = (props) => {

    const { productsProps } = props;

    let products = <EmptyCategoryPage />

    if (productsProps) {
        const kidsProducts = productsProps.filter(product => product.category === 'kids');

        products = kidsProducts.map(product => {
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
    }
}

export default connect(mapStateToProps)(Kids);