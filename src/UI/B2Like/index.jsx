import React from 'react';

export const B2Like = (props) => {
  const { like, onclick } = props;

  let btnClassName = 'b2like';
  btnClassName += like ? ' b2like_like' : ' b2like_dislike'

  return <button type="button" className={btnClassName} onClick={onclick} {...props}/>;
};
