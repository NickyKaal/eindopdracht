import React, {useState} from 'react';
import './Input.css';

import {Eye, EyeClosed} from "@phosphor-icons/react";


function Input({register, type, name, label, placeholder ,size}) {

    let [contentHidden, setContentHidden] = useState( type === "password");
    function handleHideContent(){
        setContentHidden( !contentHidden);
    }

    return (
        <label className={"inputField" + (size ? " "+Input.size[size]:"")} htmlFor={`${name}-field`}>
            {label}
            <input
                type={type !== "password" ?type:(contentHidden?type:"text")}
                id={`${name}-field`}
                placeholder={placeholder}
                className={Input.size[size]}
                {...register(name, {
                    required: {
                        value: false,
                        message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                    }
                })}
            />
            {type === "password" && contentHidden && <EyeClosed size={16} onClick={handleHideContent} alt="Show content icon" inline={true}/>}
            {type === "password" && contentHidden === false && <Eye size={16} onClick={handleHideContent} alt="Hide content icon" inline={true}/>}
        </label>
    );
}

// TODO: generiek oplossen, niet overal los maken
Input.size = {
    small:"small",
    medium:"medium",
    large:"large"
}

export default Input;