import React from 'react';

export const B2Input = (props) => {
  const { type, name, placeholder, value, onchange } = props;
  let className = 'b2input';

  return <input 
      type={type} 
      name={name} 
      className={className}
      placeholder={placeholder} 
      value={value}
      onChange={onchange} />;
};
