import { Card, Typography, Box, Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme, { EXTRA_COLORS } from '../../../theme/theme';
import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Bus from '../../../assets/icons/Bus.png';

import Bike from '../../../assets/icons/Bike.png';
import Car from '../../../assets/icons/Car.png';
import { JobContext } from '../../utils/context';
export type CardProps = {
  id: number;
  companyName: string;
  location: string;
  time: string;
  companyIcon: string;
  title: string;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    borderRadius: '12px',
    height: '159px',
    width: '571px',
    textOverflow: 'ellipsis',
  },
  iconBox: {
    width: '20%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  icon: {
    position: 'static',
    width: '45px',
    height: '45px',
    marginTop: '30px',
    marginLeft: '30px',
  },
  contentBox: {
    width: '400%',
    height: '100%',
    textOverflow: 'ellipsis',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: '21px',
  },
  threeDotAndTimeBox: {
    width: '100%',
  },
}));

const JobCard: React.FC<CardProps> = (props) => {
  const { id, companyName, location, time, companyIcon, title } = props;
  const cardContext = useContext(JobContext);
  const styles = useStyles();

  return (
    <>
      <Card
        className={styles.root}
        sx={{
          backgroundColor: `${EXTRA_COLORS.neutralShade['700']} !important`,
        }}
        onClick={() => {
          cardContext.setCardId(id);
        }}
      >
        <Box className={styles.iconBox}>
          <img className={styles.icon} src={companyIcon} alt={''} />
        </Box>

        <Box className={styles.contentBox}>
          <Box
            sx={{
              paddingTop: '2%',
              justifyContent: 'center',
              height: '75%',
            }}
          >
            <Typography
              data-testid="title"
              variant="body2"
              sx={{
                fontSize: '20px',
                lineHeight: '30px',
                marginTop: '16px',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: '12px',
                lineHeight: '16px',
                color: EXTRA_COLORS.accent[200],
              }}
            >
              {' '}
              {companyName}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: '12px',
                lineHeight: '16px',
                color: theme.palette.text.secondary,
              }}
            >
              {location}
            </Typography>
          </Box>

          <Grid container columnGap={4}>
            <Grid item sx={{ height: '18px', width: '15px' }}>
              <img src={Bus} alt="" />
            </Grid>
            <Grid item sx={{ height: '18px', width: '15px' }}>
              <img src={Bike} alt="" />
            </Grid>
            <Grid item sx={{ height: '18px', width: '15px' }}>
              <img src={Car} alt="" />
            </Grid>
          </Grid>
        </Box>

        <Grid
          container
          direction="column"
          className={styles.threeDotAndTimeBox}
        >
          <Grid
            item
            sx={{
              height: '80%',
              marginTop: '27px',
              alignSelf: 'end',
              marginRight: '19px',
            }}
          >
            <MoreHorizIcon />
          </Grid>
          <Grid
            item
            sx={{
              marginTop: '60px',
              alignSelf: 'end',
              marginRight: '19px',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              {time}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default JobCard;
