import React from 'react';
import LeftColumn from '../components/LeftColumn'

const SecondaryLayout = ({ children }) => {
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <LeftColumn />
                </div>
                <div className="col-12 col-md-8 col-lg-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SecondaryLayout;