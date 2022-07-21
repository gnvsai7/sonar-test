import { Grid, Typography, Box } from '@mui/material';

import React from 'react';
import SuccessImage from '../../../assets/image/Success.png';
import Button from '../../atoms/Button';
import { HI, OKAY, UPLOAD_SUCCESS_TEXT } from '../../utils/constant';
import { makeStyles } from '@mui/styles';
import theme from '../../../theme/theme';
export type UploadSuccessProps = {
  name: string;
  clickOk: any;
};

const styles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',

    marginTop: '25px',
    marginBottom: '30px',

    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.palette.primary['400'],

    width: '10%',
  },
  text: {
    fontWeight: 500,
    lineHeight: '20px',
    fontSize: '30px',
  },
  nameText: {
    lineHeight: '20px',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  innerBox: {
    width: '100%',

    justifyContent: 'center',
    display: 'flex',

    padding: '8px',
  },

  innerTextBox: {
    width: '100%',
    columnGap: '8px',
    rowGap: '8px',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const UploadSuccess: React.FC<UploadSuccessProps> = (props) => {
  const { name } = props;
  const classes = styles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.innerBox}>
          <img src={SuccessImage} alt={''} />
        </Box>

        <Box className={classes.innerBox}>
          <Typography variant="subtitle1" className={classes.text}>
            {HI}
          </Typography>

          <Typography variant="subtitle1" className={classes.nameText}>
            {name}!
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            {UPLOAD_SUCCESS_TEXT}
          </Typography>
        </Box>
        <Box className={classes.innerBox}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={props.clickOk}
            sx={{
              backgroundColor: `${theme.palette.primary.light}`,
              '&:hover': {
                boxShadow: 'none',
                backgroundColor: `${theme.palette.primary.light}`,
              },
              borderRadius: '8px',
              textTransform: 'uppercase',
              '& .MuiTypography-body1': {
                fontSize: '12px',
                fontWeight: 'bold',
                lineHeight: '16px',
                paddingRight: '44px',
                paddingLeft: '44px',
                paddingTop: '6px',
                paddingBottom: '6px',
                color: 'white',
              },
            }}
          >
            <Typography>{OKAY}</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UploadSuccess;
