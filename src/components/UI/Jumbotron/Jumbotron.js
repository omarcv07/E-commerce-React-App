import React from 'react';
import lol from '../../../assets/UI_img/Jumbotron_Image.jpg'

const Jumbotron = ({ children }) => {
    return (
        <div className="jumbotron">
            <div className="container p-5">
                {children}
            </div>
        </div>
    );
}

export default Jumbotron;