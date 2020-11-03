import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { addToCart } from '../store/actions/actionCreators'

const ProductDetails = (props) => {

    const { addToCart } = props

    useEffect(
        _ => {
            window.scrollTo(0, 0)
        },
        []
    )

    const { product_details, match } = props;

    const products = product_details.find(product => product.id === parseInt(match.params.productId))

    const handleAddToCart = (id) => {
        addToCart(id)
    }

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
                    {products.stock ? <span className='text-success font-weight-bold'>In Stock: {products.stock}</span> 
                        : <span className='font-weight-bold text-danger'>Out of stock</span>}
                    <hr />

                    <button 
                        onClick={_ => handleAddToCart(products.id)} 
                        className='btn btn-dark text-white'
                        disabled={products.stock ? false : true}
                        >
                    Add to Cart</button>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    product_details: state.products
});

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);    