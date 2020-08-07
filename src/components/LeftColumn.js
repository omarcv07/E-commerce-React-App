import React from 'react';

const LeftSide = () => {
    return (
        <div className="left-column-layout py-2 d-none d-md-block container">
            <div>
                <h5>Great Discounts!</h5>
                <p>Use the following promo codes to get amazing discounts</p> 
            </div>
            <ul className="border-top text-uppercase list-group-flush list-unstyled">
                <li className="justify-content-between 
                    list-group-item d-flex align-items-center">
                    <span className="discount">tenpercent</span>
                    <span className="badge badge-danger">10%</span>
                </li>
                <li className="justify-content-between 
                    list-group-item d-flex align-items-center">
                    <span className="discount">fivepercent</span>
                    <span className="badge badge-danger">5%</span>
                </li>
            </ul>
            <hr/>
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