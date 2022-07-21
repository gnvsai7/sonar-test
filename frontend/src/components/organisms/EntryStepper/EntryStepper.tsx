import {
  Button,
  StepLabel,
  Box,
  Step,
  Stepper,
  Typography,
  Container,
  Grid,
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import {
  steps as constantSteps,
  headings as dropHeaders,
} from '../../utils/stepperConstants';
import Logo from '../../../assets/icons/logo.png';
import AutoCompleteDropDown from '../../molecules/AutoCompleteDropdown';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

import { getAllLocations, getAllSkills } from '../../../services/services';
import theme, { EXTRA_COLORS } from '../../../theme/theme';

interface EntryStepperProps {
  emitActiveState?: any;
  setValues?: any;
}

const useStyles = makeStyles({
  underline: {
    position: 'static',
    width: '32px',
    height: '2px',
    left: '0px',
    top: '22px',
    flex: 'none',
    order: '1',
    alignSelf: 'stretch',
    flexGrow: '0',
    margin: '0px 0px',
    backgroundColor: '#4ABAAD !important',
    borderRadius: '4px',
  },
  skipStyles: {
    color: '#4ABAAD',
    position: 'static',
    width: '32px',
    height: '22px',
    left: 0,
    top: 0,
  },

  entryPageButton: {
    width: '140px',
    height: '46px',
    // padding: '12px 96px',
    alignItems: 'center',
    color: '#30A193 !important',
    backgroundColor: '#30A193 !important',
    borderRadius: '8px',
  },
  entryBackButton: {
    width: '140px',
    height: '46px',
    // padding: '12px 96px',
    alignItems: 'center',
    color: '#30A193',
    borderRadius: '8px',
  },
  textColor: {
    color: `${EXTRA_COLORS.neutralShade['700']} !important`,
  },
});

const EntryStepper: React.FC<EntryStepperProps> = ({
  emitActiveState,
  setValues,
}: EntryStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  function getOptions(step: number) {
    if (step < 2) {
      getAllLocations()
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(true);
          throw new Error(err);
        });
    } else {
      getAllSkills()
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(true);
          throw new Error(err);
        });
    }
  }
  useEffect(() => {
    getOptions;
  }, []);
  useEffect(() => {
    getOptions(activeStep);
  }, [activeStep]);

  const steps: string[] = constantSteps;
  const headings = dropHeaders;

  const [value, setValue] = useState([]);

  const onchange = (_e: any, newValue: any) => {
    const list: string[] = [];
    setValue(newValue);

    for (let index = 0; index < newValue.length; index++) {
      const element: string = newValue[index].label;

      list.push(element);
    }
    setValues(list);
  };

  const onClickNext = () => {
    const step = activeStep + 1;

    setValue([]);
    setActiveStep(step);
    emitActiveState(step);
  };
  const onClickBack = () => {
    const step = activeStep - 1;
    setActiveStep(step);
    setValue([]);
    emitActiveState(step);
  };

  const styles = useStyles();

  const navigate = useNavigate();

  return (
    <Container
      sx={{
        height: '100vh',
        justifyContent: 'space-evenly',
        paddingY: '3%',
        position: 'relative',
      }}
    >
      <div
        data-testid="logo"
        style={{
          marginBottom: '3vh',
          padding: '8px',
          border: 'none',
        }}
      >
        <img src={Logo} alt="GreenCommute" height={'32px'} />
      </div>
      <Box sx={{ justifyContent: 'space-between' }}>
        <Stepper
          data-testid="stepper"
          sx={{ justifyContent: 'space-between' }}
          activeStep={activeStep}
          connector={null}
        >
          {steps.map((step, index) => {
            let color: string;
            let check = {};
            if (index <= activeStep) {
              color = '#4ABAAD';
              check = {
                '& .MuiStepIcon-root': {
                  color: '#4ABAAD !important',
                  height: '40px',
                  width: '40px',
                },
              };
            }
            return (
              <Step key={step} sx={check}>
                <StepLabel>
                  <Typography variant="subtitle2" sx={{ color: color }}>
                    {step}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box sx={{ width: '450px' }}>
        <Typography paddingY={'10%'} variant="h1" sx={{ fontWeight: '600' }}>
          More than 2000 people are using Green Commute
        </Typography>
      </Box>
      <Typography
        data-testid="dropdownHeading"
        variant="subtitle1"
        paddingY={'1vh'}
        sx={{ marginBottom: '8px' }}
      >
        {headings[activeStep]}
      </Typography>
      <Box>
        {/* <Box sx={{ paddingBottom: '8px', height: '48px', width: '400px' }}> */}
        <Grid container direction="column">
          <Grid item sx={{ width: '400px', marginBottom: '20px' }}>
            {!isLoading && data && (
              <AutoCompleteDropDown
                label={'Enter ' + steps[activeStep]}
                options={data}
                values={value}
                onChange={onchange}
                multiple={true}
              />
            )}
          </Grid>

          {/* </Box> */}
          <Grid item>
            <Box flexDirection={'row'}>
              {activeStep > 0 && (
                <Button
                  data-testid="backButton"
                  onClick={onClickBack}
                  variant="outlined"
                  sx={{ marginRight: '2vh' }}
                  className={styles.entryBackButton}
                >
                  Back
                </Button>
              )}

              {activeStep === 2 ? (
                <Button
                  data-testid="nextButton"
                  variant="contained"
                  className={styles.entryPageButton}
                  onClick={() => {
                    navigate('/findjobs');
                  }}
                >
                  <Typography variant="body1" className={styles.textColor}>
                    Next
                  </Typography>
                </Button>
              ) : (
                <Button
                  data-testid="nextButton"
                  onClick={onClickNext}
                  variant="contained"
                  className={styles.entryPageButton}
                >
                  <Typography variant="body1" className={styles.textColor}>
                    Next
                  </Typography>
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box marginTop={'10%'}>
        <Typography
          className={styles.skipStyles}
          sx={{ color: theme.palette.primary['300'] }}
        >
          Skip
        </Typography>
        <Box className={styles.underline}></Box>
      </Box>
    </Container>
  );
};

export default EntryStepper;
