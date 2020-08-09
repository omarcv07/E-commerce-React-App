import React from 'react';
import PromoCode from './PromoCode'

const LeftSide = () => {
    return (
        <div className="left-column-layout py-2 d-none d-md-block container">
            <PromoCode />
            <div>
                <h5>Convert Currency</h5>
                <form>
                    <div className="form-group">
                        <select className="form-control">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                        </select>
                    </div>
                </form>
            </div>
            <hr/>
            <div>
                <h5>Contact Us</h5>
                <p>For enquiries, reach us through,
                    (+588)-000-000-000</p>
            </div>
        </div>
    );
}

export default LeftSide;