import React from 'react';

export const B2Button = (props) => {
  const { text, type, color, width, onclick } = props;

  let btnClassName = 'button';

  switch (color) {
    case 'green':
      btnClassName = 'button';
      break;
    case 'blue':
      btnClassName += ' button_blue';
      break;
    case 'transparent':
      btnClassName += ' button_transparent';
      break;
    default:
      btnClassName = 'button';
      break;
  }

  return (
    <button type={type} className={btnClassName} onClick={onclick} style={{width: width}}>
      {text}
    </button>
  );
};
