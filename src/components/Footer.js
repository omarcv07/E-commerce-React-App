import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className="d-flex text-dark p-3 justify-content-center">
                <h5>This E-commerce page was created by Omar Cardenas.
                This project is open source, visit my repository in
                <a target="blank" className="text-warning" href="https://github.com/omarcv07/E-commerce-React-App"> github</a>
                </h5>
            </div>
        </Fragment> 
    );
}

export default Footer