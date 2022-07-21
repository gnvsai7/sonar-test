import { Box, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import AQIScore from '../../components/molecules/AQI';
import AQIIndex from '../../components/organisms/AQI';
import EntryStepper from '../../components/organisms/EntryStepper/EntryStepper';
import EntryImage from '../../assets/image/Stay.png';
import WorkImage from '../../assets/image/Work.png';
import SkillsImage from '../../assets/image/Skills.png';
import { EXTRA_COLORS } from '../../theme/theme';

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
  image: {
    textAlign: 'center',
    justifyContent: 'center',
    margin: '0 15%',
  },
  AQI: {
    paddingTop: '10%',
    paddingBottom: '10%',
    minWidth: '40%',
    backgroundColor: '#edfdfb',
    justifyContent: 'space-around',
    display: 'inline-block',
  },
  skillsRoot: {
    backgroundColor: EXTRA_COLORS.neutralShade['300'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const EntryPage = () => {
  const [activeState, setActiveState] = useState(0);

  const emitActiveState = (state: number) => {
    setLocationList([]);
    setSkillList([]);
    setActiveState(state);
    console.log(state);
  };

  const [locationList, setLocationList] = useState<string[]>([]);
  const [skillList, setSkillList] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<string[]>([]);
  const [jobLocations, setJobLocations] = useState<string[]>([]);
  const [userSkills, setUserSkills] = useState<string[]>([]);
  const setValues = (newList: string[]) => {
    if (activeState === 2) {
      setSkillList(newList);
      setUserSkills(newList);
      return;
    }
    setLocationList(newList);
    if (activeState === 0) {
      setUserLocation(newList);
    }
    if (activeState === 1) {
      setJobLocations(newList);
    }
    console.log(newList);
  };

  const styles = classes();
  let list: string[] = [];

  if (activeState === 2) {
    list = skillList;
  } else {
    list = locationList;
  }

  return (
    <Stack className={styles.main} direction={'row'} data-testid="entryPage">
      <Box className={styles.entryStepper}>
        <EntryStepper
          emitActiveState={emitActiveState}
          setValues={setValues}
        ></EntryStepper>
      </Box>
      <Box className={styles.AQI} data-testid="entryImage">
        {activeState <= 1 ? (
          <React.Fragment>
            <AQIIndex cityList={list} step={activeState}></AQIIndex>
          </React.Fragment>
        ) : (
          <Box className={styles.skillsRoot} data-testid="skillsScreen">
            {skillList.length > 0 ? (
              <Box>
                <AQIScore qualityIndex={1500}></AQIScore>
                <Typography variant="h5">
                  {' '}
                  Jobs Found in locations{' '}
                  {/* {jobLocations[1] + '&' + (jobLocations[2] || '')} */}
                </Typography>
              </Box>
            ) : (
              <Box className={styles.image}>
                <img src={SkillsImage} alt="SkillsImage" />
                <Typography variant="h5"> Enter your skills</Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default EntryPage;
