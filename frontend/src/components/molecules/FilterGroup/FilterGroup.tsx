import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Filter from '../Filter/Filter';
export type Pair = {
  key: string;
  checked: boolean;
};

export interface FilterGroupProps {
  name: string;
  values: Array<Pair>;
  radio?: boolean;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const styles = makeStyles(() => ({
  filterHeading: {
    //styleName: beta/Body 1;
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
}));
const FilterGroup: React.FC<FilterGroupProps> = ({
  name,
  values,

  onChange,
}) => {
  const classes = styles();
  return (
    <>
      <Typography
        paddingLeft={'10px'}
        paddingBottom={'8px'}
        variant="body1"
        className={classes.filterHeading}
      >
        {name}
      </Typography>
      {values.map((value, index) => {
        return (
          <Filter
            key={index}
            name={value.key}
            checked={value.checked}
            onChange={onChange}
          />
        );
      })}
    </>
  );
};

export default FilterGroup;
