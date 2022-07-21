import { Box, Input, Typography, Avatar } from '@mui/material';
import Ellipse from '../../../assets/image/Ellipse.png';
import React from 'react';
import LeafImage from '../../../assets/icons/header-logo.png';
import NotificationIcon from '../../../assets/icons/NotificationIcon.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MessageIcon from '../../../assets/image/message.png';
import theme from '../../../theme/theme';
import { makeStyles } from '@mui/styles';
const styles = makeStyles(() => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',

    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    m: 2,
  },
  input: {
    color: '#FFFFFF',
    focus: 'none',
    hover: 'none',
    width: '60%',
    borderBottom: '1px solid #FFFFFF',
  },
  firstAndLastBox: {
    width: '20%',
    height: '100%',
    columnGap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingLeft: '5px',
  },
  centerBox: {
    width: '340px',
    height: '28px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
  },
  heading: {
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '32px',
    color: '#FFFFFF',
    margin: '10px',
  },
}));
const Header = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.root}>
        <Box
          className={classes.firstAndLastBox}
          sx={{
            justifyContent: 'flex-start !important',
            marginLeft: '40px',
            marginTop: '22px',
            marginBottom: '22px',
          }}
        >
          <img src={LeafImage} alt="" />
        </Box>
        <Box className={classes.centerBox}>
          <Input
            className={classes.input}
            startAdornment={
              <LocationOnOutlinedIcon sx={{ color: '#FFFFFF' }} />
            }
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '60%',
            alignItems: 'center',
            justifyContent: 'flex-end !important',
            gridColumnGap: '24px',
            paddingRight: '40px',
          }}
        >
          <img src={MessageIcon} alt="" />
          <img src={NotificationIcon} alt="" />
          <Avatar src={Ellipse} alt="" sx={{ margin: '5px' }} />
        </Box>
      </Box>
    </>
  );
};

export default Header;
