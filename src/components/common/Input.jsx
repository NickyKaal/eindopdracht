import React, {useState} from 'react';
import './Input.css';

import showContentIcon from '../../assets/icons/eye-open.svg'
import hideContentIcon from '../../assets/icons/eye-closed.svg'

import PropTypes from 'prop-types';
import Icon from "./Icon.jsx";

import {iconState} from '../../scripts/common/icons.js'

function Input({register, type, name, label, placeholder }) {

    let [contentHidden, setContentHidden] = useState( type === "password");

    function handleHideContent(){
        setContentHidden( !contentHidden);
        /* dit werkt niet, terwijl de iconState wel veranderd

        console.log(iconState);
        iconState.hidden = !iconState.hidden;
        */
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

    const iconDef = iconDefinitionsMap.get(contentHidden);

    return (
        <label className="inputField" htmlFor={`${name}-field`}>
            {label}
            <input
                type={type !== "password" ?type:(contentHidden?type:"text")}
                id={`${name}-field`}
                placeholder={placeholder}
                {...register(name, {
                    required: {
                        value: false, //TODO: Moet op true staan, nu even op false voor development
                        message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                    }
                })}
            />
            {type === "password" && <Icon {...iconDef}/>}
        </label>
    );
}

export default Input;