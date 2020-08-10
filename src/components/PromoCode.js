import React from 'react';
import { connect } from 'react-redux'; 


const PromoCode = (props) => {
    return (
            props.productCode.length > 0 ? 
                <div>
                    <div>
                        <h5>Great Discounts!</h5>
                        <p>Use the following promo codes to get amazing discounts</p> 
                    </div>
                    <ul className="border-top text-uppercase list-group-flush list-unstyled">

                        {
                            props.productCode.map((promo, index) => (
                                <li className="justify-content-between 
                                        list-group-item d-flex align-items-center" key={index}>
                                        <span className="discount">{promo.code}</span>
                                        <span className="badge badge-danger">{promo.percentage}%</span>
                                </li>
                            ))
                        }

                    </ul>
                    <hr/>
                </div>
                : null
    );
}

const mapStateToProps = state => {
  return {
    productCode: state.ProductCode
  }
}

export default connect(mapStateToProps)(PromoCode);