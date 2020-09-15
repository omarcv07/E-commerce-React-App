import React, { useEffect } from 'react';

const MainWrapper = ({ children }) => {

    return (    
        <div className="main-wrapper">
            {children}
        </div>
    );
}

export default MainWrapper;