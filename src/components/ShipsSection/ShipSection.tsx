import React from 'react';
import { ShipSectionWrapper } from './ShipSection.styles';
import { ShipCardList } from './ShipSection.styles';
import { ShipCard } from '../ShipCard/ShipCard';
import { DataLabel } from '../DataLabel/DataLabel';
import { MissionDataModel } from '../../api/responseModel';

interface ShipSectionProps {
  missionData: MissionDataModel;
}

const ShipSection = ({ missionData }: ShipSectionProps) => {
  return (
    <ShipSectionWrapper>
      <DataLabel
        isHeadingBigger
        headingText="RESCUE SHIPS"
        type="rescue_ships_label"
      />
      <ShipCardList>
        {missionData.ships.map((shipData) => (
          <ShipCard key={shipData.id} shipData={shipData} />
        ))}
      </ShipCardList>
    </ShipSectionWrapper>
  );
};

export default ShipSection;
