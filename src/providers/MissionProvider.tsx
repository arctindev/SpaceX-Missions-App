import React, { useState, useEffect } from 'react';
import { query, queryLink } from '../api/query';
import { MissionDataModel } from '../api/responseModel';
import axios from 'axios';

interface MissionContextProps {
  currentMission: number;
  currentMissionData: MissionDataModel | undefined;
  nextMission: () => void;
  pastMission: () => void;
  blockPast: boolean;
  blockNext: boolean;
}

export const MissionContext = React.createContext<MissionContextProps>({
  currentMission: 0,
  currentMissionData: undefined,
  nextMission: () => {},
  pastMission: () => {},
  blockPast: true,
  blockNext: false,
});

interface MissionProviderProps {
  children: React.ReactNode;
}

export const MissionProvider = ({ children }: MissionProviderProps) => {
  const [missions, setMissions] = useState([]);
  const [currentMissionData, setCurrentMissionData] = useState();
  const [currentMission, setCurrentMission] = useState(0);
  const [blockPast, setBlockPast] = useState(true);
  const [blockNext, setBlockNext] = useState(false);

  const nextMission = (): void => {
    if (currentMission === missions.length - 2) {
      setBlockNext(true);
    }
    setCurrentMissionData(missions[currentMission + 1]);
    setCurrentMission(currentMission + 1);
    setBlockPast(false);
  };

  const pastMission = (): void => {
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