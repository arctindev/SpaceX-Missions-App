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
  isHeadingBigger,
}) => {
  return (
    <DataLabelWrapper type={type}>
      <DataLabelHeading isHeadingBigger={isHeadingBigger}>
        {headingText}
      </DataLabelHeading>
      {data && (
        <DataLabelText dataTextIsBig={dataTextIsBig}>
          {data}
          {hasRecoveredComponent && (
            <RecoveredComponent isRecovered={hasRecoveredComponent.data} />
          )}
        </DataLabelText>
      )}
    </DataLabelWrapper>
  );
};
