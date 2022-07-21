/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import EntryImage from '../../../assets/image/Entry-image.png';
import EntryStepper from '../../organisms/EntryStepper/EntryStepper';
import { makeStyles } from '@mui/styles';

const classes = makeStyles(() => ({
  main: {
    justifyContent: 'space-between',
    height: '100vh',
    maxHeight: '100vh',
  },
  entryStepper: {
    maxWidth: '60%',
    paddingLeft: '7%',
    paddingRight: '7%',
    display: 'inline',
  },
  AQI: {
    paddingTop: '10%',
    paddingBottom: '10%',
    minWidth: '40%',
    backgroundColor: '#edfdfb',
    justifyContent: 'space-around',
    display: 'inline-block',
  },
  image: {
    textAlign: 'center',
    justifyContent: 'center',
    margin: '0 15%',
  },
}));

const EntryTemplate = () => {
  const styles = classes();
  return (
    <Stack
      className={styles.main}
      direction={'row'}
      data-testid="entryTemplate"
    >
      <Box className={styles.entryStepper}>
        <EntryStepper
          emitActiveState={() => {}}
          setValues={() => {}}
        ></EntryStepper>
      </Box>
      <Box className={styles.AQI} data-testid="entryImage">
        <Box className={styles.image}>
          <img src={EntryImage} alt={EntryImage} />
          <Typography variant="h5">
            {' '}
            Enter Location to know Air Quality Index {' (AQI)'}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default EntryTemplate;
