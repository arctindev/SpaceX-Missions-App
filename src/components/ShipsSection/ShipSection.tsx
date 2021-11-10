import React from 'react';
import { ShipSectionWrapper } from './ShipSection.styles';
import { ShipCardList } from './ShipSection.styles';
import { ShipCard } from '../ShipCard/ShipCard';
import { DataLabel } from '../DataLabel/DataLabel';

const ShipSection = ({ missionData }: any) => {
  return (
    <ShipSectionWrapper>
      <DataLabel
        isHeadingBigger
        headingText="RESCUE SHIPS"
        type="rescue_ships_label"
      />
      <ShipCardList>
        {missionData.ships.map((shipData: any) => (
          <ShipCard key={shipData.id} shipData={shipData} />
        ))}
      </ShipCardList>
    </ShipSectionWrapper>
  );
};

export default ShipSection;
