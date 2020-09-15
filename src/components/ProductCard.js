import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <div className="col-8 col-lg-4 col-md-6">
                <Link to={`/product/${props.productId}`}>
                    <div className="shop-card">
                        <div className="shop-media">
                            <img src={require(`../assets/images/shop_images/${props.productImage}`)} alt={props.productName}/>

                            {props.productSale ? <span className="sale-badge">Sale</span> : null}

                        </div>

                        <div className="shop-body">
                            <span className="product-category">{props.category}</span>
                            <span className="product-name">{props.productName}</span>
                            <div>
                                <span className="product-price">{props.productPrice}$</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    );
}

export default ProductCard;