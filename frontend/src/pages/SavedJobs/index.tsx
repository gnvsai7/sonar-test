import React from 'react';

import Header from '../../components/organisms/Header/index';
import BasicTemplate from '../../components/templates/BasicTemplate';
import SideNavBar from '../../components/organisms/SideNavBar';
import JobList from '../../components/organisms/jobList';
import { Box } from '@mui/material';

const SavedJobsPage: React.FC = () => {
  return (
    <>
      <BasicTemplate
        Header={<Header />}
        SideNavBar={<SideNavBar />}
        MainContent={
          <Box m={4}>
            <JobList />
          </Box>
        }
      />
    </>
  );
};

export default SavedJobsPage;
