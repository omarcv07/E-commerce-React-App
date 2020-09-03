import React, { Fragment } from 'react';

const Jumbotron = ({ children }) => {
    return (
        <Fragment>
            <div className='jumbotron'>
                <div className='container p-5'>
                    {children}
                </div>
            </div>
        </Fragment>
    );
}

export default Jumbotron;