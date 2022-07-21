import React, { useState } from 'react';
import { Card, Box, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import JobTitleCard from '../../molecules/JobTitleCard/JobTitleCard';
import CommonRotes from '../../molecules/CommonRoutes';
import VehicleTab from '../VehicleTab/VehicleTab';
import GreenRoutes from '../../molecules/GreenRoutes/GreenRoutes';
export interface JobDescriptionProps {
  id: number;
  jobTitle: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  jobUploadedTime: string;
  jobDescription: string;
  aboutTheCompany: string;
}

const useStyles = makeStyles(() => ({
  root: {
    height: '734px',
    width: '404px',
    borderRadius: '12px',
  },
  icon: {
    position: 'static',
    width: '90%',
    height: '90%',
  },
  iconBox: {
    height: '100%',

    paddingTop: '3%',
    paddingLeft: '3%',
  },
}));

const JobDescriptionCard: React.FC<JobDescriptionProps> = ({
  id,
  jobTitle,
  companyLogo,
  companyName,
  companyAddress,
  jobUploadedTime,
  jobDescription,
  aboutTheCompany,
}: JobDescriptionProps) => {
  const [greenRoutes, setGreenRoutes] = useState(false);

  const onClickGreenRoutes = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGreenRoutes(true);
  };

  const styles = useStyles();
  return (
    <Card className={styles.root} data-testid="jobDescriptionCard">
      <JobTitleCard
        id={id}
        companyLogo={companyLogo}
        companyAddress={companyAddress}
        jobTitle={jobTitle}
        companyName={companyName}
        jobUploadedTime={jobUploadedTime}
      />
      <Box sx={{ padding: '22px' }}>
        {<Divider sx={{ color: '#D6D6D6' }} />}
      </Box>
      {!greenRoutes && (
        <GreenRoutes
          aboutTheCompany={aboutTheCompany}
          jobDescription={jobDescription}
          onClickHandler={onClickGreenRoutes}
        />
      )}

      {greenRoutes && (
        <Box>
          <Box sx={{ paddingLeft: '25px', paddingRight: '20px' }}>
            <CommonRotes
              location1={companyAddress}
              location2={companyAddress}
            />
          </Box>
          <VehicleTab></VehicleTab>
        </Box>
      )}
    </Card>
  );
};

export default JobDescriptionCard;
