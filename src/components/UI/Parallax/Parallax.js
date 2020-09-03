import React from 'react';

const Parallax = ({ children }) => {
    return (
        <div className='parallax d-flex'>
            <div className='container justify-content-center d-flex align-items-center'>
                {children}
            </div>
        </div>
    );
}

export default Parallax;