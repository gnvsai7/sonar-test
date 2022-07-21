import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {}
const CustomizedButton = styled(MuiButton)(({ theme }) => ({
  '&:hover': {
    boxShadow: 'none',


  },
  "&:focusVisible":{
  boxShadow:'none'
  }
}));
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <CustomizedButton
        disableRipple


        {...props}
      ></CustomizedButton>
    </>
  );
};

export default Button;
