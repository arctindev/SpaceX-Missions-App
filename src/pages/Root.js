import React from 'react';
import Template from '../template/template';
import { PageContentWrapper } from '../components/PageContentWrapper/PageContentWrapper.styles';
import MissionDetailsSection from '../components/MissionDetailsSection/MissionDetailsSection';

const Root = () => {
  return (
    <Template>
      <PageContentWrapper>
        <MissionDetailsSection />
      </PageContentWrapper>
    </Template>
  );
};

export default Root;
