import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import AQI, { AQIScoreProps } from '../../molecules/AQI';

import SkillsImage from '../../../assets/image/Skills.png';
import StayImage from '../../../assets/image/Stay.png';
import WorkImage from '../../../assets/image/Work.png';
import { EXTRA_COLORS } from '../../../theme/theme';
import { useQuery } from 'react-query';
import { getAQI } from '../../../services/services';
import { Box, Stack, Typography } from '@mui/material';
export type AQIIndexProps = {
  cityList: string[];
  step: number;
};
const styles = makeStyles(() => ({
  root: {
    backgroundColor: EXTRA_COLORS.neutralShade['300'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100vh',
    marginTop: '-10%',
  },
  cityName: {
    width: '114px',
    height: '30px',
    marginTop: '25%',
    color: '#FF725E',
    marginLeft: '32px',
  },
  image: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    margin: '0 15%',
  },
}));

async function getCitiesAQIValue({ queryKey }: any) {
  const cityList = queryKey[1];
  console.log(cityList);
  const values: number[] = [];
  try {
    for (const city of cityList) {
      const value = await getAQI(city);

      values.push(value[0].value);
    }
  } catch (err) {
    throw new Error('Data not found');
  }
  return values;
}
const AQIIndex: React.FC<AQIIndexProps> = (props) => {
  const { cityList, step } = props;
  let DisplayImage = '';
  if (step === 0) {
    DisplayImage = StayImage;
  } else if (step === 1) {
    DisplayImage = WorkImage;
  }
  const { isLoading, data } = useQuery(['getAQI', cityList], getCitiesAQIValue);
  const classes = styles();

  useEffect(() => {
    console.log('refreshed');
  }, [step]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Box className={classes.root}>
        {data.length > 0 ? (
          <Stack>
            {data.map((value: number, index: number) => {
              return (
                <Stack direction={'row'} key={index} justifyContent={'center'}>
                  {cityList.length === 1 ? (
                    <Box sx={{ marginTop: '75px' }}>
                      {' '}
                      <AQI qualityIndex={value} key={index}></AQI>
                    </Box>
                  ) : (
                    <AQI qualityIndex={value} key={index}></AQI>
                  )}

                  {cityList.length > 1 && (
                    <Typography
                      className={classes.cityName}
                      data-testid="aqi"
                      sx={{
                        width: '114px',
                        height: '30px',
                        marginTop: '25%',
                        color: '#FF725E',
                        marginLeft: '32px',
                      }}
                      variant="h2"
                    >
                      {cityList[index]}
                    </Typography>
                  )}
                </Stack>
              );
            })}
            <Typography variant="h3" color="#373C38" sx={{ marginTop: '60px' }}>
              {' '}
              Real Time Air Quality Index at this location {' (AQI)'}
            </Typography>
          </Stack>
        ) : (
          <Box className={classes.image}>
            <img src={DisplayImage} alt="DisplayImage" />
            <Typography variant="h3" color="#373C38" sx={{ marginTop: '60px' }}>
              {' '}
              Enter Location to know Air Quality Index {' (AQI)'}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AQIIndex;
