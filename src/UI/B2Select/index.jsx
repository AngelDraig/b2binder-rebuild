import React, { useState } from 'react';

export const B2Select = ({ label, placeholder, options }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');

  const headerClassName = !isActive ? 'b2select__header' : 'b2select__header b2select__header_close';
  const stylesForHeader = {
    padding: '12px 20px',
    height: '42px'
  }
  const stylesForHeaderLabel = {
    padding: '4px 20px',
    height: '50px'
  }

  return (
    <form className="b2select">
      
      <fieldset className={headerClassName} onClick={() => setIsActive(!isActive)} style={label ? stylesForHeaderLabel : stylesForHeader }>
        {label && <legend className="b2select__legend">{label}</legend>}
        {selected === '' ? placeholder : selected}
      </fieldset>
      
        {isActive && (
          <ul className="b2select__list">
            {options.map((option) => (
              <li
                key={option.id}
                className="b2select__item"
                onClick={() => {
                  setSelected(option.value);
                  setIsActive(false);
                }}
              >
                {option.value}
              </li>
            ))}
          </ul>
        )}

    </form>
  );
};

