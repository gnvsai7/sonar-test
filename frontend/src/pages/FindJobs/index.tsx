import React from 'react';
import SideNavBar from '../../components/organisms/SideNavBar';
import MainContent from '../../components/organisms/MainContent';

import Header from '../../components/organisms/Header/index';
import BasicTemplate from '../../components/templates/BasicTemplate';

const FindJobsPage: React.FC = () => {
  return (
    <>
      <BasicTemplate
        Header={<Header />}
        SideNavBar={<SideNavBar />}
        MainContent={<MainContent />}
      />
    </>
  );
};

export default FindJobsPage;
