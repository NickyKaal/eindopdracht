import React from 'react';
import PropTypes from 'prop-types';

function Input({register, type, name, label }) {
    return (
        <label htmlFor={`${name}-field`}>
            {label}
            <input
                type={type}
                id={`${name}-field`}
                {...register(name, {
                    required: {
                        value: true,
                        message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                    }
                })}
            />
        </label>
    );
}

export default Input;