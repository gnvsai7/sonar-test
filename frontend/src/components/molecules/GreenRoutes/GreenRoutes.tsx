import React from 'react';
import { Card, Box, Typography, Stack, Button } from '@mui/material';
import theme from '../../../theme/theme';
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';
export interface GreenRoutesProps {
  jobDescription: string;
  aboutTheCompany: string;
  onClickHandler: any;
}

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    margin:'0'
  },
}));

const GreenRoutes: React.FC<GreenRoutesProps> = ({
  jobDescription,
  aboutTheCompany,
  onClickHandler,
}: GreenRoutesProps) => {
  const descContent = {
    paddingTop: '3px',
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
  };

  const descHeading = {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '20px',
  };

  const buttonBoxStyles = {
    width: '100%',
    boxShadow:'3px 0px 3px 0px #7D7D7D',
  };
  const subtitleBoxStyles = {
    paddingLeft:'24px',
    paddingRight:'24px',
    paddingTop:'24px',
    width: '100%',
    height: '30%',
  };

  const styles = useStyles();
  return (
    <Card className={styles.root} data-testid="greenRoutes">
      
      {
        <Stack direction={'column'} sx={{height:'100%',width:'100%'}}>
          <Box sx={subtitleBoxStyles}>
            <Typography variant="body1" sx={descHeading}>
              Description
            </Typography>
            <Typography variant="body2" sx={descContent}>
              {jobDescription}
            </Typography>
          </Box>
          <Box sx={subtitleBoxStyles}>
            <Typography variant="body1" sx={descHeading}>
              About the Company
            </Typography>
            <Typography variant="body2" sx={descContent}>
              {aboutTheCompany}...{' '}
              <span style={{ color: '#4ABAAD' }}>SEE MORE</span>
            </Typography>{' '}
          </Box>
          <Box sx={buttonBoxStyles}>
            <Box sx={{
                  alignItems:'flex-end',
                  marginTop: '4px',
                }}>
              <Button
                onClick={onClickHandler}
                data-testid="greenRoutesButton"
                fullWidth
                endIcon={<ArrowForward />}
                
              >
                <Typography variant="subtitle1" sx={{padding:'10px',fontFamily:'Montserrat',lineHeight:'24px',fontSize:'16px',fontWeight:'500'}} color={'#30A193'}>
                  Green Commute Routes
                </Typography>
              </Button>
            </Box>
            
          </Box>
        </Stack>
      }
    </Card>
  );
};

export default GreenRoutes;
