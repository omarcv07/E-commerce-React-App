import React from 'react';
import { connect } from 'react-redux'

import { formatMoney } from '../../utils/priceFormater';
import SecondaryLayout from '../../layouts/SecondaryLayout'
import EmptyCart from '../../components/EmptyCart'
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/actionCreators'

const Cart = (props) => {
    let productsAdded = <EmptyCart />

    const { removeItem, addQuantity, subtractQuantity, addedProducts, total } = props;

    const handleRemove = (id) => {
        removeItem(id)
    }

    const handleAddQuantity = (id) => {
        addQuantity(id)
    }

    const handleSubtractQuantity = (id) => {
        subtractQuantity(id)
    }

    if (addedProducts.length) {
        productsAdded = addedProducts.map((product, index) => {
            return (
                <React.Fragment key={index}>
                    <div className='row justify-content-center justify-content-md-between'>
                        <div className="shop-media">
                            <img src={require(`../../assets/images/shop_images/${product.img}`)} alt={props.productName}/>

                            {props.productSale ? <span className="sale-badge">Sale</span> : null}

                        </div>
                        <div className='col-6'>
                            <h5>{product.name}</h5>
                            <h6>
                                <div>${product.price}</div>
                                <div>{product.category}</div>
                            </h6>
                            <div className="quantity">
                                <input className="btn-dark font-weight-bold" type="button" onClick={_ => handleSubtractQuantity(product.id)} value="-" />
                                <input className="text-center" max={product.stock} min="0" readOnly step="1" type="number" value={product.quantity} />
                                <input className="btn-dark font-weight-bold" type="button" onClick={_ => handleAddQuantity(product.id)} value="+" />
                            </div>
                            <hr />

                            <button className="waves-effect waves-light btn pink remove" onClick={_ => handleRemove(product.id)}>Remove</button>
        
                        </div>
                    </div>
                    <hr />
                </React.Fragment>  
            );
        });
    }
    return (
        <SecondaryLayout>
            <div className='container py-5'>
                {productsAdded}
                <h3 className='justify-content-end d-flex'>
                    {addedProducts.length ?  <span>Subtotal: <h2 className='badge-dark badge'> {formatMoney(total)}</h2></span> : null}
                </h3>
            </div>
        </SecondaryLayout>
    );
}

const mapStateToProps = state => ({
    addedProducts: state.addedProducts,
    total: state.total
})

const mapDispatchToProps = dispatch => ({
    removeItem: (id) => dispatch(removeItem(id)),
    addQuantity: (id) => dispatch(addQuantity(id)),
    subtractQuantity: (id) => dispatch(subtractQuantity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);