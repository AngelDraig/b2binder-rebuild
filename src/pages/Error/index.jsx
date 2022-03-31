import React, { useState } from 'react';
import { B2Button } from '../../UI/B2Button';
import { B2Input } from '../../UI/B2Input';
import { B2InputRub } from '../../UI/B2InputRub';
import { B2Tag } from '../../UI/B2Tag';
import { B2Checkbox } from '../../UI/B2Checkbox';
import { B2Select } from '../../UI/B2Select';

export const Error = () => {
  const options=[
    {id: 1, value: 'ООО'}, 
    {id: 2, value: 'ИП'},
    {id: 3, value: 'Самозанятость'}
  ]

  return (
    <div className='error'>
      <h1>Страница не найдена</h1>
      <B2Button text='Btn' onclick={()=>{console.log('press')}} color='blue' width="400px" type='button'></B2Button>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2Input placeholder="Адрес электронной почты" onChange={(e)=>{console.log(e.target.value)}} style={{width: "1000px"}}/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2InputRub placeholder="Сумма"/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2Tag text="Технологии" active={true} />
      <B2Tag text="Спорт" active={false} onClick={()=>{console.log('press tag')}}/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2Checkbox 
          label='Компьютерные игры' 
          id='comp'
          name='comp'
          value='comp'
      />
      <B2Checkbox 
        label='Технологии' 
        id='techno'
        name='techno'
        value='techno'
      />
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      {/* <B2Select selected={selected} setSelected={setSelected} /> */}
      <B2Select placeholder='Форма организации' options={options}/>
    </div>

  )
};
