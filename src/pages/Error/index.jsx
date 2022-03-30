import React from 'react';
import { B2Button } from '../../UI/B2Button';

export const Error = () => {
  return (
    <div className='error'>
      <h1>Страница не найдена</h1>
      <B2Button text='Btn' onclick={()=>{console.log('press')}} color='tomato' widht="200px" type='button'></B2Button>
    </div>

  )
};
