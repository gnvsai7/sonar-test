import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import React from 'react';
import { EXTRA_COLORS } from '../../../theme/theme';

export type BasicTemplateProps = {
  Header: React.ReactNode;
  SideNavBar: React.ReactNode;
  MainContent: React.ReactNode;
};

const BasicTemplate: React.FC<BasicTemplateProps> = (props) => {
  const { Header, SideNavBar, MainContent } = props;
  return (
    <>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Box sx={{ width: '100%' }} data-testid="header">
          {Header}
        </Box>
        <Box sx={{ display: 'flex', width: '100%', height: '95%' }}>
          <Box sx={{ height: '100%', width: '15%' }} data-testid="sideNav">
            {SideNavBar}
          </Box>
          <Box
            sx={{ alignItems: 'center', width: '86%', height: '100%' }}
            data-testid="mainContent"
          >
            {MainContent}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BasicTemplate;
