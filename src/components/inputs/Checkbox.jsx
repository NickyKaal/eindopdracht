import React from 'react';
import './Checkbox.css';



function Checkbox({register,  name, label}) {

    return (
        <label className="input-checkbox" htmlFor={`${name}-field`}>
            <input
                type="checkbox"
                id={`${name}-field`}
                {...register(name, {
                    required: {
                        value: false,
                        message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                    }
                })}
            />
            {label}
        </label>
    );
}


export default Checkbox;