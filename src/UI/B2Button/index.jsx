import React from 'react';

export const B2Button = (props) => {
  const { text, type, color, width, onclick } = props;

  let btnClassName = 'button';
  btnClassName += color === 'blue' ? ' button_blue' : ' button_transparent';

  return (
    <button type={type} className={btnClassName} onClick={onclick}>
      {text}
    </button>
  );
};
