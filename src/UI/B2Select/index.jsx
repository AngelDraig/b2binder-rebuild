import React, { useState } from 'react';

export const B2Select = ({ placeholder, options }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');

  const headerClassName = !isActive ? 'b2select__header' : 'b2select__header b2select__header_close';

  return (
    <div className="b2select">
      <div className={headerClassName} onClick={() => setIsActive(!isActive)}>
        {selected === '' ? placeholder : selected}
      </div>
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
    </div>
  );
};
