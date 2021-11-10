import React, { useState, useEffect } from 'react';
import { query, queryLink } from '../api/query';
import axios from 'axios';

interface missionContextProps {
  currentMission: number;
  currentMissionData: any;
  nextMission?: any;
  pastMission?: any;
  blockPast?: any;
  blockNext?: any;
}
export const MissionContext = React.createContext<missionContextProps>({
  currentMission: 0,
  currentMissionData: '',
});

export const MissionProvider = ({ children }: any) => {
  const [missions, setMissions] = useState([]);
  const [currentMissionData, setCurrentMissionData] = useState<any>();
  const [currentMission, setCurrentMission] = useState<any>(0);
  const [blockPast, setBlockPast] = useState<any>(true);
  const [blockNext, setBlockNext] = useState<any>(false);

  const nextMission = () => {
    if (currentMission === missions.length - 2) {
      setBlockNext(true);
    }
    setCurrentMissionData(missions[currentMission + 1]);
    setCurrentMission(currentMission + 1);
    setBlockPast(false);
  };

  const pastMission = () => {
    if (currentMission === 1) {
      setBlockPast(true);
    }
    setCurrentMissionData(missions[currentMission - 1]);
    setCurrentMission(currentMission - 1);
    setBlockNext(false);
  };

  useEffect(() => {
    axios
      .post(queryLink, {
        query,
      })
      .then(({ data: { data } }) => {
        setMissions(data.launchesPast);
        setCurrentMissionData(data.launchesPast[0]);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  return (
    <MissionContext.Provider
      value={{
        currentMissionData,
        currentMission,
        nextMission,
        pastMission,
        blockPast,
        blockNext,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export default MissionProvider;
