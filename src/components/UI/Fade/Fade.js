import React from 'react';

// I have not implemented this yet 
const FadeEffect = (props) => {
    return (
        <div className={`faded ${props.showFade ? 'show' : 'hide'}`}
            onClick={props.toogleSideMenu}>
            {props.children}
        </div>
    );
}

export default FadeEffect;