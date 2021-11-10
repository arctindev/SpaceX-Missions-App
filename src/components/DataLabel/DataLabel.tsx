import React from 'react';
import { useState } from 'react';
import {
  DataLabelWrapper,
  DataLabelHeading,
  DataLabelText,
} from './DataLabel.styles';
import { RecoveredComponent } from '../RecoveredComponent/RecoveredComponent';
import { ShowMoreComponent } from '../ShowMoreComponent/ShowMoreComponent';

interface DataLabelProps {
  headingText?: string;
  data?: string;
  dataTextIsBig?: boolean;
  type?: string;
  hasRecoveredComponent?: {
    data: boolean;
  };
  isHeadingBigger?: boolean;
  longerData?: boolean;
}

export const DataLabel = ({
  headingText,
  data,
  dataTextIsBig,
  type,
  hasRecoveredComponent,
  isHeadingBigger,
  longerData,
}: DataLabelProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter: React.MouseEventHandler<HTMLParagraphElement> =
    (): void => {
      setShowDetails(true);
    };

  const handleMouseLeave: React.MouseEventHandler<HTMLParagraphElement> =
    (): void => {
      setShowDetails(false);
    };

  return (
    <DataLabelWrapper type={type}>
      <DataLabelHeading isHeadingBigger={isHeadingBigger}>
        {headingText}
      </DataLabelHeading>
      {data && (
        <DataLabelText
          onMouseEnter={type === 'launch_site' ? handleMouseEnter : undefined}
          onMouseLeave={type === 'launch_site' ? handleMouseLeave : undefined}
          dataTextIsBig={dataTextIsBig}
        >
          {data}
          {hasRecoveredComponent && (
            <RecoveredComponent isRecovered={hasRecoveredComponent.data} />
          )}
          {showDetails && <ShowMoreComponent data={longerData} />}
        </DataLabelText>
      )}
    </DataLabelWrapper>
  );
};
