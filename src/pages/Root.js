import React from 'react';
import Template from '../template/template';
import { PageContentWrapper } from '../components/PageContentWrapper/PageContentWrapper.styles';
import MissionDetailsSection from '../components/MissionDetailsSection/MissionDetailsSection';
import ShipSection from '../components/ShipsSection/ShipSection';

const Root = () => {
  return (
    <Template>
      <PageContentWrapper>
        <MissionDetailsSection />
        <ShipSection />
      </PageContentWrapper>
    </Template>
  );
};

export default Root;
