import React from 'react';
import { useState } from 'react';
import { DataLabelWrapper, DataLabelHeading, DataLabelText } from './DataLabel.styles';
import { RecoveredComponent } from '../RecoveredComponent/RecoveredComponent';
import { ShowMoreComponent } from '../ShowMoreComponent/ShowMoreComponent';

interface DataLabelProps {
  headingText: string;
  type: string;
  dataTextIsBig?: boolean;
  data?: string;
  hasRecoveredComponent?: {
    data: boolean;
  };
  isHeadingBigger?: boolean;
  longerData?: string;
  screenReaderHelper?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
}

export const DataLabel = ({
  headingText,
  data,
  dataTextIsBig,
  type,
  hasRecoveredComponent,
  isHeadingBigger,
  longerData,
  screenReaderHelper
}: DataLabelProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter: React.MouseEventHandler<HTMLParagraphElement> = (): void => {
    setShowDetails(true);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLParagraphElement> = (): void => {
    setShowDetails(false);
  };

  return (
    <DataLabelWrapper type={type}>
      <DataLabelHeading isHeadingBigger={isHeadingBigger} aria-label={screenReaderHelper && screenReaderHelper}>{headingText}</DataLabelHeading>
      {data && (
        <DataLabelText
          onMouseEnter={type === 'launch_site' ? handleMouseEnter : undefined}
          onMouseLeave={type === 'launch_site' ? handleMouseLeave : undefined}
          dataTextIsBig={dataTextIsBig}
        >
          {data}
          {showDetails && <ShowMoreComponent data={longerData} />}
        </DataLabelText>
      )}
      {hasRecoveredComponent && <RecoveredComponent isRecovered={hasRecoveredComponent.data} />}
    </DataLabelWrapper>
  );
};
