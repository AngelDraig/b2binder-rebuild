import React from 'react';
import { Slider } from '@mui/material/';

export const B2RangeSlider = ({ currentValue, totalValue }) => {
  return <Slider size="5px" defaultValue={currentValue} max={totalValue} valueLabelDisplay="auto" />;
};
