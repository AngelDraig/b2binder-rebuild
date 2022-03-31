import React, { useState } from 'react';

export const B2InputRub = (props) => {
  const { name, placeholder } = props;
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    /**Надо при/после заполнения выводить число с разрядами. в какой момент форматировать? */
    setValue(e.target.value.toLocaleString()); 
  }

  return (
      <input
      type='number'
      name={name}
      className="b2input-rub"
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      {...props}
    />

  );
};
