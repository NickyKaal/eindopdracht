import React from 'react';
import './Textarea.css';


function Textarea({register,  name, label, rows}) {

    return (
        <label className="input-textarea" htmlFor={`${name}-field`}>
            {label}
            <textarea
                id={`${name}-field`}
                rows={rows}
                {...register(name, {
                    required: {
                        value: false,
                        message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                    }
                })}
            />
        </label>
    );
}


export default Textarea;