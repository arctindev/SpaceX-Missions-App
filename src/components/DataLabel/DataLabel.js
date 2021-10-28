import React from 'react';
import { useState } from 'react';
import {
  DataLabelWrapper,
  DataLabelHeading,
  DataLabelText,
} from './DataLabel.styles';
import { RecoveredComponent } from '../RecoveredComponent/RecoveredComponent';
import { ShowMoreComponent } from '../ShowMoreComponent/ShowMoreComponent';

export const DataLabel = ({
  headingText,
  data,
  dataTextIsBig,
  type,
  hasRecoveredComponent,
  isHeadingBigger,
  longerData,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleMouseEnter = () => {
    setShowDetails(true);
  };
  const handleMouseLeave = () => {
    setShowDetails(false);
  };
  return (
    <DataLabelWrapper type={type}>
      <DataLabelHeading isHeadingBigger={isHeadingBigger}>
        {headingText}
      </DataLabelHeading>
      {data && (
        <DataLabelText
          onMouseEnter={type === 'launch_site' ? handleMouseEnter : null}
          onMouseLeave={type === 'launch_site' ? handleMouseLeave : null}
          dataTextIsBig={dataTextIsBig}
        >
          {data}
          {hasRecoveredComponent && (
            <RecoveredComponent isRecovered={hasRecoveredComponent.data} />
          )}
          {showDetails && <ShowMoreComponent data={longerData}/>}
        </DataLabelText>
      )}
    </DataLabelWrapper>
  );
};
