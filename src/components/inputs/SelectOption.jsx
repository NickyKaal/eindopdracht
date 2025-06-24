import React from 'react';

function SelectOption({option}) {
    return (
        <option key={option.value} value={option.value}>{option.display}</option>
    );
}

export default SelectOption;