import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className='py-5 my-5'>
            <h5 className='font-weight-bold'>Your Cart is empty. <Link to='/home' className='orange-color'>Please fill it up.</Link></h5>
        </div>
    );
}

export default EmptyCart;