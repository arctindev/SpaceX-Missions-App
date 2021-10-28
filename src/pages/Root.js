import React from 'react';
import { useContext } from 'react';
import Template from '../template/template';
import { PageContentWrapper } from '../components/PageContentWrapper/PageContentWrapper.styles';
import MissionDetailsSection from '../components/MissionDetailsSection/MissionDetailsSection';
import ShipSection from '../components/ShipsSection/ShipSection';
import { MissionContext } from '../providers/MissionProvider';

const Root = () => {
  const { currentMissionData } = useContext(MissionContext);
  return (
    <Template>
      <PageContentWrapper>
        {currentMissionData ? (
          <>
            <MissionDetailsSection missionData={currentMissionData} />
            <ShipSection missionData={currentMissionData} />
          </>
        ) : null}
      </PageContentWrapper>
    </Template>
  );
};

export default Root;
