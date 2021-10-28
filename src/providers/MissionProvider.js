import React, { useState, useEffect } from 'react';
import { query, queryLink } from '../api/query';
import axios from 'axios';

export const MissionContext = React.createContext({
  currentMission: 0,
  currentMissionData: '',
});

export const MissionProvider = ({ children }) => {
  const [missions, setMissions] = useState([]);
  const [currentMissionData, setCurrentMissionData] = useState();
  const [currentMission, setCurrentMission] = useState(0);
  const [blockPast, setBlockPast] = useState(true);
  const [blockNext, setBlockNext] = useState(false);

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
        nextMission,
        pastMission,
        currentMission,
        blockPast,
        blockNext,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export default MissionProvider;
