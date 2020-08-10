import React, { Fragment } from 'react';

const ProductCard = (props) => {
    return (
        <Fragment>
            <div className="col-8 col-lg-4 col-md-6">
                <a href={`/products/${props.productwithId}`} className="text-dark">
                    <div className="shop-card">
                        <div className="shop-media">
                            <img src={require(`../assets/images/shop_images/${props.productImage}`)} alt={props.productName}/>

                            {props.productSale ? <span className="sale-badge">Sale</span> : null}

                        </div>

                        <div className="shop-body">
                            <span className="product-name">{props.productName}</span>
                            <div>
                                <span className="product-price">{props.productPrice}$</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </Fragment>
    );
}

export default ProductCard;