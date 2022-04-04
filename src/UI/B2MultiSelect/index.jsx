import React, { useState } from 'react';
import { B2Checkbox } from '../B2Checkbox';

export const B2MultiSelect = ({ label, placeholder, options }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState([]);

  const headerClassName = !isActive ? 'b2multiselect__header' : 'b2multiselect__header b2multiselect__header_close';
  const stylesForHeader = {
    padding: '12px 20px',
    height: '42px',
  };
  const stylesForHeaderLabel = {
    padding: '4px 20px',
    height: '50px',
  };

  return (
    <div className="b2multiselect">
      {!isActive && (
        <fieldset
          className={headerClassName}
          onClick={() => setIsActive(!isActive)}
          style={label ? stylesForHeaderLabel : stylesForHeader}
        >
          {label && <legend className="b2multiselect__legend">{label}</legend>}
          {selected === [] ? placeholder : selected.join(' ').slice(0, 45)}
        </fieldset>
      )}

      {isActive && (
        <ul className="b2multiselect__list">
          {options.map((option) => (
            <li key={option.id} className="b2multiselect__item">
              <B2Checkbox
                label={option.label}
                id={option.id}
                name={option.name}
                value={option.value}
                onClick={() => {
                  setSelected([...selected, option.label]);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

{
  /* <li
                key={option.id}
                className="b2multiselect__item"
                onClick={() => {
                  setSelected(option.value);
                  setIsActive(false);
                }}
              >
                {option.value}
              </li> */
}
