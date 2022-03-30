import React from 'react';
import { B2Button } from '../../UI/B2Button';
import { B2Input } from '../../UI/B2Input';

export const Error = () => {
  return (
    <div className='error'>
      <h1>Страница не найдена</h1>
      <B2Button text='Btn' onclick={()=>{console.log('press')}} color='blue' width="400px" type='button'></B2Button>
      <hr />
      <B2Input type='text' placeholder="Адрес электронной почты" />
    </div>

  )
};
