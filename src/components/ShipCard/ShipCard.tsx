import React from 'react';
import {
  ShipCardWrapper,
  ShipImage,
  ShipNameText,
  ShipDetailsWrapper,
  DataLabelWrapper,
  DataHeading,
  DataText,
  ShipImageWrapper,
} from './ShipCard.styles';
import { shipModel } from '../../api/responseModel';
import { imgurResizeImage } from '../../utils/imgurResizeImage';
import ScreenReaderHeader from '../ScreenReaderHeader/ScreenReaderHeader'

interface ShipCardProps {
  shipData: shipModel;
}

export const ShipCard = ({ shipData }: ShipCardProps) => {
  const imageLink = imgurResizeImage(shipData.image);
  return (
    <ShipCardWrapper>
      <ShipDetailsWrapper>
        <ScreenReaderHeader headingText="Ship Name" type="h3"/>
        <ShipNameText>{shipData.name}</ShipNameText>
        <DataLabelWrapper>
          <DataHeading>HOME PORT</DataHeading>
          <DataText>{shipData.home_port}</DataText>
        </DataLabelWrapper>
        <DataLabelWrapper>
          <DataHeading>WEIGHT[kg]</DataHeading>
          <DataText>{shipData.weight_kg ? shipData.weight_kg : 'Unknown'}</DataText>
        </DataLabelWrapper>
      </ShipDetailsWrapper>
      <ShipImageWrapper>
        <ShipImage
          src={imageLink}
          alt={`This is a picture of ship named "${shipData.name}"`}
        ></ShipImage>
      </ShipImageWrapper>
    </ShipCardWrapper>
  );
};
