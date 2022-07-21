import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { FilterGroupProps, Pair } from '../FilterGroup/FilterGroup';
import theme from '../../../theme/theme';

const FilterWithRadioButton: React.FC<FilterGroupProps> = (props) => {
  const getDefaultValue = (values: Pair[]) => {
    for (const v of values) {
      if (v.checked === true) {
        return v.key;
      }
    }
    return undefined;
  };
  const radioValue = getDefaultValue(props.values);
  let radioGroupComponent: any;
  if (radioValue === undefined) {
    radioGroupComponent = (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={props.onChange}
      >
        {props.values.map((value, index) => {
          return (
            <FormControlLabel
              key={index}
              value={value.key}
              control={<Radio />}
              label={value.key}
              sx={{
                color: theme.palette.text.secondary,
                marginBottom: '2px !important',
              }}
            />
          );
        })}
      </RadioGroup>
    );
  } else {
    radioGroupComponent = (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue={radioValue}
        onChange={props.onChange}
      >
        {props.values.map((value, index) => {
          return (
            <FormControlLabel
              key={index}
              value={value.key}
              control={<Radio />}
              label={value.key}
              sx={{
                color: theme.palette.text.secondary,
                marginBottom: '2px !important',
              }}
            />
          );
        })}
      </RadioGroup>
    );
  }

  return (
    <>
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          component={'span'}
          sx={{ marginBottom: '3px !important' }}
        >
          {props.name}
        </FormLabel>

        {radioGroupComponent}
      </FormControl>
    </>
  );
};

export default FilterWithRadioButton;
