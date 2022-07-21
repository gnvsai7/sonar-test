import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Paper, Grid, Box, Stack, Icon, ListItem } from '@mui/material';
import ToLocationIcon from '../../../assets/icons/ToLocationIcon.png';
import FromLocationIcon from '../../../assets/icons/FromLocationIcon.png';
import FromLocationInsideIcon from '../../../assets/icons/FromLocationInsideIcon.png';
import DotDotDotIcon from '../../../assets/icons/DotDotDotIcon.png';
import UpIcon from '../../../assets/icons/UpIcon.png';
import DownIcon from '../../../assets/icons/DownIcon.png';

import { EXTRA_COLORS } from '../../../theme/theme';
import { COMMON_ROUTES } from '../../utils/constant';
import Button from '../../atoms/Button';

export type CommonRoutesProps = {
  location1: string;
  location2: string;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    marginY: '18px',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: EXTRA_COLORS.neutralShade['700'],
  },
  dot: {
    backgroundColor: `${EXTRA_COLORS.grey[400]}`,
    borderRadius: '50%',
    width: '4px',
    marginTop: '2px',
    height: '4px',
  },
  text: {
    color: `${EXTRA_COLORS.text.primary}`,
    height: '16px',
    fontWeight: 500,
  },
  locationButton: {
    minHeight: 0,
    padding: 0,
    '&:hover': {
      backgroundColor: 'white',
      cursor: 'default',
    },
  },
  icon: {
    transform: 'rotate(90deg)',
  },
}));

const CommonRotes: React.FC<CommonRoutesProps> = (props) => {
  const { location1, location2 } = props;
  const styles = useStyles();
  return (
    <>
      <Button
        startIcon={<ArrowBackIcon sx={{ color: EXTRA_COLORS.text.primary }} />}
      >
        <Typography variant="body1" className={styles.text}>
          {COMMON_ROUTES}
        </Typography>
      </Button>

      <Paper className={styles.paper}>
        <Grid container sx={{ paddingY: '18px', paddingLeft: '12px' }}>
          <Stack direction={'row'}>
            <Grid item xs={11}>
              <Grid container direction="column">
                <Grid item>
                  <Stack direction={'row'} marginLeft={'4px'}>
                    <Button className={styles.locationButton}>
                      <Box
                        borderRadius={'16px'}
                        width={'16px'}
                        height={'16px'}
                        sx={{ backgroundColor: '#D6D6D6' }}
                        marginRight={'8px'}
                      >
                        <img
                          style={{ marginBottom: '4.5px' }}
                          src={FromLocationInsideIcon}
                          width="8px"
                          height={'8px'}
                          alt={FromLocationInsideIcon}
                        />
                      </Box>
                      <Box>
                        <Typography className={styles.text} variant="caption">
                          {location1}
                        </Typography>
                      </Box>
                    </Button>
                  </Stack>
                </Grid>
                <Grid
                  item
                  sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    marginLeft={'10px'}
                    sx={{
                      marginTop: '6px',
                      marginBottom: '4.75px',
                    }}
                  >
                    <Box className={styles.dot}></Box>
                    <Box className={styles.dot}></Box>
                    <Box className={styles.dot}></Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Stack direction={'row'} marginLeft="5.5px">
                    <Button className={styles.locationButton}>
                      <Box marginRight={'8px'}>
                        <img
                          style={{ marginTop: '8px', marginBottom: '0' }}
                          src={ToLocationIcon}
                          width="13.5px"
                          height={'16.5px'}
                          alt={ToLocationIcon}
                        />
                      </Box>
                      <Box>
                        <Typography className={styles.text} variant="caption">
                          {location2}
                        </Typography>
                      </Box>
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} marginLeft={'48px'} marginTop={'24px'}>
              <Icon sx={{ color: '#656E66' }}>
                <img
                  src={DownIcon}
                  alt={DownIcon}
                  style={{ color: '#656E66' }}
                ></img>
                <img src={UpIcon} alt={UpIcon}></img>
              </Icon>
            </Grid>
          </Stack>
        </Grid>
      </Paper>
    </>
  );
};

export default CommonRotes;
