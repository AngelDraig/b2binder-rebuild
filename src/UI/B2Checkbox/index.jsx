import React from 'react';

export const B2Checkbox = (props) => {
    let { label, id, name, value } = props;

    return (
        <div className='b2checkbox'>
            <input 
                type="checkbox" 
                className='b2checkbox__input' 
                id={id} 
                name={name} 
                value={value}
                onChange={ (e)=>{console.log(e.target.value)}} 
                {...props}>
            </input>
            <label className='b2checkbox__label' htmlFor={id}>{label}</label>
        </div>

    )
}