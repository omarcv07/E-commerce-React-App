import React from 'react';

const NavAuthentication = () => {
    return (
        <div className='bg-black p-2 nav-authentication'>
            <div className='container text-white d-flex justify-content-end text-uppercase'>
                <a href="/" className='px-3'>Log in</a>
                ·
                <a href="/" className='px-3'>Create an account</a>
            </div>
        </div>
    );
}

export default NavAuthentication;