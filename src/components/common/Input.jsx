import React, {useState} from 'react';
import './Input.css';

import showContentIcon from '../../assets/icons/eye-open.svg'
import hideContentIcon from '../../assets/icons/eye-closed.svg'

import Icon from "./Icon.jsx";


function Input({register, type, name, label, placeholder }) {

    let [contentHidden, setContentHidden] = useState( type === "password");

    function handleHideContent(){
        setContentHidden( !contentHidden);
    }

    const iconDefinitionsMap = new Map();
    iconDefinitionsMap.set(true, {
        icon:showContentIcon
        ,name:"showContentIcon"
        ,alt:"Show content icon"
        ,inline:true
        ,onClick:handleHideContent
    });
    iconDefinitionsMap.set(false, {
        icon:hideContentIcon
        ,name:"hideContentIcon"
        ,alt:"Hide content icon"
        ,inline:true
        ,onClick:handleHideContent
    });

    const hideIcon = iconDefinitionsMap.get(contentHidden);

    return (
        <label className="inputField" htmlFor={`${name}-field`}>
            {label}
            <input
                type={type !== "password" ?type:(contentHidden?type:"text")}
                id={`${name}-field`}
                placeholder={placeholder}
                {...register(name, {
                    required: {
                        value: false,
                        message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                    }
                })}
            />
            {type === "password" && <Icon {...hideIcon}/>}
        </label>
    );
}

export default Input;