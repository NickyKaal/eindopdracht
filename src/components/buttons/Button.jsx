import React from 'react';
import "./Button.css";

function Button({text, onClick,type,id,value, variant, styleClas}) {
    return (
        <button className={`button-${variant} ${styleClas}`} type={type} id={id} value={value} onClick={onClick}>
            {text}
        </button >
    );
}

Button.variants = {
    get primary(){return "primary";}
    ,get secondary(){return "secondary";}
};

export default Button;