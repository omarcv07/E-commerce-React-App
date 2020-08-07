import React from 'react';

const FadeEffect = (props) => {
    return (
        <div className={`faded ${props.showFade ? 'show' : 'hide'}`}
            onClick={props.toogleSideMenu}>
            {props.children}
        </div>
    );
}

export default FadeEffect;