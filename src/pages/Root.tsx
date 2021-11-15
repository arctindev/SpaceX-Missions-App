import React, { Suspense } from 'react';
import { useContext } from 'react';
import Template from '../template/template';
import { PageContentWrapper } from '../components/PageContentWrapper/PageContentWrapper.styles';
import { MissionContext } from '../providers/MissionProvider';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import { ErrorComponent } from '../components/ErrorComponent/ErrorComponent';
const MissionDetailsSection = React.lazy(
  () => import('../components/MissionDetailsSection/MissionDetailsSection')
);
const ShipSection = React.lazy(() => import('../components/ShipsSection/ShipSection'));

const Root = () => {
  const { currentMissionData, isError } = useContext(MissionContext);
  return (
    <Template>
      <PageContentWrapper>
        {!isError ? 
        currentMissionData ? (
          <Suspense fallback={<LoaderComponent />}>
            <MissionDetailsSection missionData={currentMissionData} />
            <ShipSection missionData={currentMissionData} />
          </Suspense>
        ) : (
          <LoaderComponent />
        ) : <ErrorComponent />}
      </PageContentWrapper>
    </Template>
  );
};

export default Root;
