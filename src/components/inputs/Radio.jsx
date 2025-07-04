import React from 'react';
import './Radio.css';

function Radio({register, radioSet, name, groupName}) {

    return <>
        <label>{groupName}</label>
        <div className="radioSetWrapper">
            {radioSet.map((radio) => {
                return <label key={`radio-${radio.value}`} className={`label-${name}`}>
                    <input
                        type="radio"
                        value={radio.value}
                        {...register(name, {
                            required: {
                                value: false,
                                message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                            }
                        })}
                    />
                    {radio.label}
                </label>
            })}
        </div>
    </>;

}

export default Radio;