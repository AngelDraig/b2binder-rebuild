import React from 'react';

export const B2Tag = (props) => {
  let { text, active } = props;

  return (
    <button 
    type="button" 
    className={active ? 'b2tag' : 'b2tag b2tag_disabled'} 
    {...props}>
      {`#${text}`}
    </button>
  );
};
