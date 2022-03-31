import React from 'react';

export const B2Input = (props) => {
  const {name, placeholder, value } = props;
  let className = 'b2input';

  return <input 
      type='text' 
      name={name} 
      className={className}
      placeholder={placeholder} 
      value={value}
      {...props}
      />;
};
