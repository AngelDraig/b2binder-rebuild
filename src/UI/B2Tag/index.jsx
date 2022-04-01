import React, { useState } from 'react';

export const B2Tag = (props) => {
  let { text, active } = props;
  const [checked, setChecked] = useState(active);

  return (
    <button 
    type="button" 
    className={checked ? 'b2tag' : 'b2tag b2tag_disabled'} 
    onClick={()=>{setChecked(!checked)}}
    {...props}>
      {`#${text}`}
    </button>
  );
};
