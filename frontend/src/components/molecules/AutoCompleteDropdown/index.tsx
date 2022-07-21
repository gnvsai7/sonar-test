import React from 'react';
import AutoComplete from '@mui/material/Autocomplete';
import { styled, TextField } from '@mui/material';
// import CrossIcon from "../../../assets/icons/cross.png"
import { EXTRA_COLORS } from '../../../theme/theme';
import CloseIcon from '@mui/icons-material/Close';
import MuiChip from '../../atoms/Chip';
export type AutoCompleteProps = {
  options: any;
  label: string;
  values?: any;
  onChange?: (arg1: any, arg2: any) => void;
  multiple?: boolean;
  freeSolo?: boolean;
};

const MuiAutoCompleteDropdown = styled(AutoComplete)(({ theme }) => ({
  '& .MuiAutocomplete-inputRoot': {
    borderRadius: '8px',
    background: EXTRA_COLORS.neutralShade['700'],
    border: `1px solid ${theme.palette.grey['200']}`,
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  '& .MuiChip-root': {
    backgroundColor: EXTRA_COLORS.neutralShade['400'],
  },

  // '& .MuiChip-deleteIcon': {
  //   backGroundColor: `${EXTRA_COLORS.neutralShade['400']} !important`,
  //   // backGroundColor: `${theme.palette.text.primary} !important`,
  // },
}));
const AutoCompleteDropDown: React.FC<AutoCompleteProps> = (props) => {
  const {
    options,
    label,
    multiple = false,
    freeSolo = false,
    onChange,
    values,
  } = props;
  const labels: { label: string }[] = [];
  for (let index = 0; index < options.length; index++) {
    labels.push({ label: options[index].name });
  }
  return (
    <MuiAutoCompleteDropdown
      data-testid="autocomplete"
      freeSolo={freeSolo}
      id="combo-box-demo"
      options={labels}
      disablePortal
      value={values}
      multiple={multiple}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          sx={{
            fontSize: 12,
            lineHeight: 16,
            fontWeight: 500,
            fontFamily: 'Montserrat',
            '& input::placeholder': {
              fontFamily: 'Montserrat',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '16px',
              letterSpacing: '0px',
            },
          }}
          {...params}
          placeholder={label}
        />
      )}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option: any, index) => (
          <MuiChip
            // {...getTagProps({ index })}
            key={index}
            label={option.label}
            onDelete={() => {
              console.log('Deleted');
            }}
          />
        ));
      }}
    />
  );
};

export default AutoCompleteDropDown;
