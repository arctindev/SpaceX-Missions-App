import React from 'react';
import { useEffect, useState } from 'react';
import Template from '../template/template';
import { PageContentWrapper } from '../components/PageContentWrapper/PageContentWrapper.styles';
import MissionDetailsSection from '../components/MissionDetailsSection/MissionDetailsSection';
import ShipSection from '../components/ShipsSection/ShipSection';
import { query, queryLink } from '../mocks/query';
import axios from 'axios';

const Root = () => {
  const [missions, setMissions] = useState([]);
  const [currentMission, setCurrentMission] = useState();
  useEffect(() => {
    axios
      .post(
        queryLink,
        {
          query,
        },
      )
      .then(({ data: { data } }) => {
        setMissions(data);
        setCurrentMission(data.launchesPast[0]);
      })
      .catch(() => {
        console.log('error')
      });
  }, []);
  console.log(currentMission)
  return (
    <Template>
      <PageContentWrapper>
        {currentMission ? (
          <>
          <MissionDetailsSection missionData={currentMission}/>
          <ShipSection missionData={currentMission}/>
          </>
        ): null}
      </PageContentWrapper>
    </Template>
  );
};

export default Root;
