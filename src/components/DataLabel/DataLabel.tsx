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
  headingText: string;
  type: string;
  dataTextIsBig?: boolean;
  data?: string;
  hasRecoveredComponent?: {
    data: boolean;
  };
  isHeadingBigger?: boolean;
  longerData?: string;
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