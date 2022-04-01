import React from 'react';
import { useNavigate } from 'react-router-dom';

export const B2Back = () => {
const navigate = useNavigate();

    return (
        <button
            className='b2back'
            type='button'
            onClick={()=> navigate(-1)}
            >Назад</button>
    )
}