import { Box, FormLabel } from '@mui/material';
import React from 'react';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import theme from '../../../theme/theme';
export interface FilterProps {
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = (props: FilterProps) => {
  const { name, checked = false, onChange } = props;
  return (
    <Box paddingBottom={'2px'}>
      <Checkbox
        data-testid="checked"
        defaultChecked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }}
        value={name}
      />
      <FormLabel
        sx={{ color: theme.palette.text.secondary }}
        data-testid="checkbox-label"
      >
        {name}
      </FormLabel>
    </Box>
  );
};

export default Filter;
