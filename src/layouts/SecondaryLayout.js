import React from 'react';
import LeftColumn from '../components/LeftColumn';

const SecondaryLayout = ({ children }) => {
    return (
        <div className='container py-4'>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <LeftColumn />
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <div className='row justify-content-sm-center justify-content-md-start'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondaryLayout;