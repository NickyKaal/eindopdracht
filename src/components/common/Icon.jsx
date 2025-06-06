import React from 'react';
import './Icon.css';



function Icon({icon, name, alt, inline, onClick}) {

    return (
        <div className={`icon-wrapper ${inline && "icon-inline"}`} >
            <img
                className={name}
                src={icon}
                alt={alt}
                onClick={onClick}
            />

        </div>
    );
}

export default Icon;