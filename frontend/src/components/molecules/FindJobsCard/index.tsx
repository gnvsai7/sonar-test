import { Card, Typography, Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme, { EXTRA_COLORS } from '../../../theme/theme';
import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';

import { Grid } from '@mui/material';
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
    boxSizing: 'border-box',
    borderRadius: '12px',
    height: '280px',
    width: '400px',
    padding: '17.5px 17.5px 17.5px 30px',
    cursor: 'pointer',
  },
  iconBox: {
    width: '20%',
    height: '100%',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  icon: {
    position: 'static',
    width: '45px',
    height: '45px',
    marginLeft: '8px',
    marginTop: '8px',
  },
  contentBox: {
    width: '60%',
    height: '100%',

    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  threeDotAndTimeBox: {
    height: '100%',
  },
}));

const FindJobsCard: React.FC<CardProps> = (props) => {
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
          console.log('setCardId');
          cardContext.setCardId(id);
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item className={styles.iconBox} xs={10}>
                <img className={styles.icon} src={companyIcon} alt={''} />
              </Grid>
              <Grid item sx={{ height: '80%' }} xs={1}>
                <MoreHorizIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginTop: '41px' }}>
            <Grid container direction="column" rowGap="4px">
              <Grid item>
                <Typography
                  data-testid="title"
                  variant="subtitle1"
                  sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '24px',
                  }}
                >
                  {title}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '500',
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: EXTRA_COLORS.accent[200],
                  }}
                >
                  {companyName}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '500',
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: theme.palette.text.secondary,
                  }}
                >
                  {location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={{ marginTop: '20px' }}>
            <Typography
              variant="caption"
              sx={{
                fontSize: '12px',
                lineHeight: '16px',
                fontWeight: '500',
                color: theme.palette.text.secondary,
              }}
            >
              Commute routes available :
            </Typography>
          </Grid>

          <Grid item sx={{ marginTop: '12px' }}>
            <Grid container columnGap="20px" spacing={2}>
              <Grid item xs={1}>
                <img src={Bus} alt="" />
              </Grid>
              <Grid item xs={1}>
                <img src={Bike} alt="" />
              </Grid>
              <Grid item xs={1}>
                <img src={Car} alt="" />
              </Grid>
              <Grid item sx={{ marginLeft: '104px' }}>
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
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default FindJobsCard;
