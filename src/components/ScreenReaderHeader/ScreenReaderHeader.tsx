import React from 'react';
import {
  StyledScreenReaderH1,
  StyledScreenReaderH2,
  StyledScreenReaderH3,
  StyledScreenReaderH4,
  StyledScreenReaderH5,
  StyledScreenReaderH6,
} from './ScreenReaderHeader.styles';

interface ScreenReaderHeaderProps {
  headingText: string;
  type: string;
}
const ScreenReaderHeader = ({ headingText, type }: ScreenReaderHeaderProps) => {
  switch (type) {
    case 'h1':
      return <StyledScreenReaderH1>{headingText}</StyledScreenReaderH1>;
    case 'h2':
      return <StyledScreenReaderH2>{headingText}</StyledScreenReaderH2>;
    case 'h3':
      return <StyledScreenReaderH3>{headingText}</StyledScreenReaderH3>;
    case 'h4':
      return <StyledScreenReaderH4>{headingText}</StyledScreenReaderH4>;
    case 'h5':
      return <StyledScreenReaderH5>{headingText}</StyledScreenReaderH5>;
    case 'h6':
      return <StyledScreenReaderH6>{headingText}</StyledScreenReaderH6>;
    default:
      throw console.error('Screen reader component should have a type prop');
  }
};

export default ScreenReaderHeader;
