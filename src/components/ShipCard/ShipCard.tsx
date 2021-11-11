import React from 'react';
import {
  ShipCardWrapper,
  ShipImage,
  ShipNameHeading,
  ShipDetailsWrapper,
  DataLabelWrapper,
  DataHeading,
  DataText,
} from './ShipCard.styles';
import { shipModel } from '../../api/responseModel';

interface ShipCardProps {
  shipData: shipModel;
}

export const ShipCard = ({ shipData }: ShipCardProps) => {
  return (
    <ShipCardWrapper>
      <ShipImage
        src={shipData.image}
        alt={`This is a picture of ship named "${shipData.name}"`}
      ></ShipImage>
      <ShipDetailsWrapper>
        <ShipNameHeading>{shipData.name}</ShipNameHeading>
        <DataLabelWrapper>
          <DataHeading>HOME PORT</DataHeading>
          <DataText>{shipData.home_port}</DataText>
        </DataLabelWrapper>
        <DataLabelWrapper>
          <DataHeading>WEIGHT[kg]</DataHeading>
          <DataText>
            {shipData.weight_kg ? shipData.weight_kg : 'Unknown'}
          </DataText>
        </DataLabelWrapper>
      </ShipDetailsWrapper>
    </ShipCardWrapper>
  );
};