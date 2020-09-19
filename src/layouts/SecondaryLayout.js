import React from 'react';

const SecondaryLayout = ({ children }) => {
    return (
        <div className='container col-12 col-md-8 col-lg-9 container py-4'>
            <div className='row'>                
                {children}
            </div>
        </div>
    );
}

export default SecondaryLayout;