import { Box, Divider, Grid, Typography } from '@mui/material';
import Button from '../../atoms/Button/index';
import React from 'react';
import DashboardIcon from '../../../assets/icons/dashboard.png';
import { EXTRA_COLORS } from '../../../theme/theme';
import {
  DASHBOARD,
  SETTINGS,
  CONTACT_US,
  NEED_HELP,
  FIND_JOBS,
  SAVED_JOBS,
  PRACTICE_TEST,
  NEWS_EVENTS,
} from '../../utils/constant';
import PRACTICE_ICON from '../../../assets/icons/PracticeTest.png';
import SAVED_ICON from '../../../assets/icons/save-jobs.png';
import WorkOutlineIcon from '../../../assets/icons/WorkoutLineIcon.png';
import NEWS_ICON from '../../../assets/icons/NewsEvents.png';
import HelpIcon from '../../../assets/icons/NeedHelp.png';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PhoneIcon from '../../../assets/icons/Contact.png';
import SettingsIcon from '../../../assets/icons/Setting.png';
import { makeStyles, styled } from '@mui/styles';
import { Link } from 'react-router-dom';
import theme from '../../../theme/theme';

const classes = makeStyles(() => ({
  tempbutton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '22px',
  },
  navtext: {
    color: theme.palette.text.primary,
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '22px',
  },
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: EXTRA_COLORS.neutralShade['700'],
    boxShadow: '0px2px8pxrgba(125,125,125,0.12)',
    border: 'none',
  },
  item: {
    width: '100%',
    height: '100%',
  },
  icon: {
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[100],
    width: '40px',
    height: '40px',
    color: theme.palette.text.disabled,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
  },
  sideNavBarHeadings: {
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '48px',
    width: '100%',
    height: '48px',
    marginBottom: '16px',
    '& .MuiButton-root': {
      marginLeft: '64px',
    },
    '& .MuiDivider-vertical': {
      width: '4px',
      height: '100%',
      backgroundColor: '#1B877A',
      marginLeft: '85px',
    },
  },
  divider: {
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.grey[200]}`,
  },
  hoverDivider: {
    borderRadius: '4px 0px 0px 4px',
    backgroundColor: '#1B877A',
  },
}));

const HoverBox = styled(Box)(() => ({
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: EXTRA_COLORS.neutralShade['400'],
    borderRight: '4px solid #1B877A ',
    borderRadius: '4px',
  },
}));
const SideNav: React.FC = () => {
  const styles = classes();
  return (
    <>
      <Grid container className={styles.root}>
        <Grid item className={styles.item}>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="dashboard"
            sx={{ marginTop: '30px' }}
          >
            <Button
              className={styles.tempbutton}
              disableRipple
              startIcon={
                <Box className={styles.icon}>
                  <img src={DashboardIcon} alt="" />
                </Box>
              }
            >
              <Typography className={styles.navtext} variant="body2">
                {DASHBOARD}
              </Typography>
            </Button>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="findJobs"
          >
            <Link to="/findjobs" style={{ textDecoration: 'none' }}>
              <Button
                disableRipple
                className={styles.tempbutton}
                startIcon={
                  <Box className={styles.icon}>
                    <img src={WorkOutlineIcon} alt="" />
                  </Box>
                }
              >
                <Typography variant="body2" className={styles.navtext}>
                  {FIND_JOBS}
                </Typography>
              </Button>
            </Link>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="savedJobs"
          >
            <Link to="/savejobs" style={{ textDecoration: 'none' }}>
              <Button
                disableRipple
                className={styles.tempbutton}
                startIcon={
                  <Box className={styles.icon}>
                    <img src={SAVED_ICON} alt="" />
                  </Box>
                }
              >
                <Typography variant="body2" className={styles.navtext}>
                  {SAVED_JOBS}
                </Typography>
              </Button>
            </Link>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="practiceTest"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={
                <Box className={styles.icon}>
                  <img src={PRACTICE_ICON} alt="" />
                </Box>
              }
            >
              <Typography variant="body2" className={styles.navtext}>
                {PRACTICE_TEST}
              </Typography>
            </Button>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="newsEvents"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={
                <Box className={styles.icon}>
                  <img src={NEWS_ICON} alt="" />
                </Box>
              }
            >
              <Typography variant="body2" className={styles.navtext}>
                {NEWS_EVENTS}
              </Typography>
            </Button>
          </HoverBox>
          <Box
            sx={{
              height: '4px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Divider data-testid="divider" className={styles.divider} />
          </Box>

          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="needHelp"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={
                <Box className={styles.icon}>
                  <img src={HelpIcon} alt="" />
                </Box>
              }
              sx={{ marginTop: '5px' }}
            >
              <Typography variant="body2" className={styles.navtext}>
                {NEED_HELP}
              </Typography>
            </Button>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="contactUs"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={
                <Box className={styles.icon}>
                  <img src={PhoneIcon} alt="" />
                </Box>
              }
            >
              <Typography variant="body2" className={styles.navtext}>
                {CONTACT_US}
              </Typography>
            </Button>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="settings"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={
                <Box className={styles.icon}>
                  <img src={SettingsIcon} alt="" />
                </Box>
              }
            >
              <Typography variant="body2" className={styles.navtext}>
                {SETTINGS}
              </Typography>
            </Button>
          </HoverBox>
        </Grid>
      </Grid>
    </>
  );
};

export default SideNav;
