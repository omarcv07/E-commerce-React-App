import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 

const ProductDetails = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { product_details, match } = props;

    const products = product_details.find(product => product.id === parseInt(match.params.productId))

    return (
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6 d-flex'>

                    <img src={require(`../assets/images/shop_images/${products.img}`)}  width={400} alt={products.name}/>

                </div>
                <div className='col-12 col-md-6'>
                    <h2>{products.name}</h2>
                    <h4>{products.category}</h4>
                    <h5>{products.price}$</h5>
                    {products.quantity ? <span className='text-success font-weight-bold'>In Stock: {products.quantity}</span> 
                        : <span className='font-weight-bold text-danger'>Out of stock</span>}
                    <hr />

                    <button className='btn btn-dark text-white'>Add to Cart</button>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        product_details: state.products
    };
}

export default connect(mapStateToProps)(ProductDetails);    