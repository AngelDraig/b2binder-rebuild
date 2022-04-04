import React from 'react';
import { B2Button } from '../../UI/B2Button';
import { B2Input } from '../../UI/B2Input';
import { B2InputRub } from '../../UI/B2InputRub';
import { B2Tag } from '../../UI/B2Tag';
import { B2Checkbox } from '../../UI/B2Checkbox';
import { B2Select } from '../../UI/B2Select';
import { B2Back } from '../../UI/B2Back';
import { B2Like } from '../../UI/B2Like';
import { B2Info } from '../../UI/B2Info';
import { B2RangeSlider } from '../../UI/B2RangeSlider';
import { Logo } from '../../components/Logo'

export const Error = () => {
  const options=[
    {id: 1, value: 'ООО'}, 
    {id: 2, value: 'ИП'},
    {id: 3, value: 'Самозанятость'}
  ]

  return (
    <div className='error' style={{marginBottom: '300px'}}>
      <h1>Страница не найдена</h1>
      <B2Button text='Кнопка с градиентом' onclick={()=>{console.log('press')}} color='green' width="200px" type='button'></B2Button>
      <B2Button text='Кнопка без градиента' style={{background: '#27AE60', width:"200px"}}></B2Button>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2Input placeholder="Адрес электронной почты" onChange={(e)=>{console.log(e.target.value)}} style={{width: "1000px"}}/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2InputRub placeholder="Сумма"/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2Tag text="Технологии" active={true} />
      <B2Tag text="Спорт" active={false} />
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
        <B2Select placeholder='Форма организации' options={options}/>
        <B2Select label='Страна' placeholder='Выберите регион' options={options}/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2Back/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <B2Like like={true}/>
      <B2Like like={false}/>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <div style={{backgroundColor: 'black'}}><B2Info /></div>
      <hr style={{marginBottom: '20px', marginTop: '20px', color: 'lightblue'}} />
      <div style={{width: '300px', margin: '0 auto'}}>
        <B2RangeSlider
          currentValue={700000}
          totalValue={1200000}
        />
      </div>
    </div>

  )
};
