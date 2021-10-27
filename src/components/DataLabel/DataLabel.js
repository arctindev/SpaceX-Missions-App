import React from 'react';
import {
  DataLabelWrapper,
  DataLabelHeading,
  DataLabelText,
} from './DataLabel.styles';
import { RecoveredComponent } from '../RecoveredComponent/RecoveredComponent';

export const DataLabel = ({
  headingText,
  data,
  dataTextIsBig,
  type,
  hasRecoveredComponent,
  isWithoutData,
  headingIsBigger,
}) => {
  return (
    <DataLabelWrapper type={type}>
      <DataLabelHeading>{headingText}</DataLabelHeading>
      <DataLabelText dataTextIsBig={dataTextIsBig}>{data}
      {hasRecoveredComponent && <RecoveredComponent isRecovered={hasRecoveredComponent.data}/>}
      </DataLabelText>
    </DataLabelWrapper>
  );
};
