import React from 'react';
import './Select.css';
import SelectOption from "./SelectOption.jsx";

function Select({register,  name, label, options, size, SO = SelectOption}) {
    const MySelectOption = SO; //TODO: teveel werk voor nu, maar voor bv dj's en gebruikers de avatar in de optie opnemen naast de naam via SO

    return (
        <label className={"input-select"+ (size ? " "+Select.size[size]:"")} htmlFor={`${name}-field`}>
            {label}
            <select {...register(name, {
                required: {
                    value: false,
                    message: `${name[0].toUpperCase() + name.slice(1).toLowerCase()} is verplicht`,
                }
            })} >
                <option value="">Select...</option>
                {options.map((option)=><MySelectOption option={option}/>)}
            </select>
        </label>
    );
}

// TODO: generiek oplossen, niet overal los maken
Select.size = {
    small:"small",
    medium:"medium",
    large:"large"
};

export default Select;