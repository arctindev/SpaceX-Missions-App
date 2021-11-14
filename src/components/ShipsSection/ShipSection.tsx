import React from 'react';
import {
  ShipSectionWrapper,
  ShipCardList,
  NoShipInfoWrapper,
  NoShipInfoText,
} from './ShipSection.styles';
import { ShipCard } from '../ShipCard/ShipCard';
import { DataLabel } from '../DataLabel/DataLabel';
import { MissionDataModel } from '../../api/responseModel';

interface ShipSectionProps {
  missionData: MissionDataModel;
}

const ShipSection = ({ missionData }: ShipSectionProps) => {
  return (
    <ShipSectionWrapper>
      <DataLabel isHeadingBigger headingText="RESCUE SHIPS" type="rescue_ships_label" />
      {missionData.ships &&
      missionData.ships.length > 0 &&
      missionData.ships.filter((shipData) => shipData != null && shipData.image != null).length >
        0 ? (
        <ShipCardList>
          {missionData.ships.map((shipData) => {
            return shipData ? (
              shipData.image ? (
                <ShipCard key={shipData.id} shipData={shipData} />
              ) : null
            ) : null;
          })}
        </ShipCardList>
      ) : (
        <NoShipInfoWrapper>
          <NoShipInfoText>Ships used in this mission are unknown.</NoShipInfoText>
        </NoShipInfoWrapper>
      )}
    </ShipSectionWrapper>
  );
};

export default ShipSection;
