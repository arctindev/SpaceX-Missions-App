import React from 'react';
import { ShipSectionWrapper } from './ShipSection.styles';
import { ShipCardList } from './ShipSection.styles';
import { ShipCard } from '../ShipCard/ShipCard';
import { DataLabel } from '../DataLabel/DataLabel';
import { data } from '../../mocks/data';

const ShipSection = () => {
  return (
    <ShipSectionWrapper>
      <DataLabel
        isHeadingBigger
        headingText="RESCUE SHIPS"
        type="rescue_ships_label"
      />
      <ShipCardList>
        {data[0].ships.map((shipData) => (
          <ShipCard key={shipData.id} shipData={shipData} />
        ))}
      </ShipCardList>
    </ShipSectionWrapper>
  );
};

export default ShipSection;
