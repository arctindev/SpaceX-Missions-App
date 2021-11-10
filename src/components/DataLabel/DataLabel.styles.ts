import React from 'react';
import styled from 'styled-components';
import { getMobileMarginValue, getDesktopMarginValue } from './DataLabelUtils';

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
  onMouseEnter?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
}
// Props: Type
export const DataLabelWrapper = styled.div<DataLabelProps>`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin: auto;
  text-align: inherit;
  margin-bottom: ${({ type } : any) => getMobileMarginValue(type)};

  @media only screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: ${({ type }: any) => getDesktopMarginValue(type)};
  }
`;

// Props: isHeadingBigger
export const DataLabelHeading = styled.h3<DataLabelProps>`
  font-weight: 500;
  font-size: ${({ isHeadingBigger, theme }: any) =>
    isHeadingBigger ? theme.fontSize.m : theme.fontSize.s};
  color: ${({ theme }) => theme.fontColor.grey};
  line-height: ${({ isHeadingBigger }: any) =>
    isHeadingBigger ? '19px' : '16.41px'};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 7px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 8px;
    line-height: 19px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

// Props: dataTextIsBig
export const DataLabelText = styled.p<DataLabelProps>`
  font-weight: ${({ dataTextIsBig }: any) => (dataTextIsBig ? '700' : '500')};
  font-size: ${({ dataTextIsBig, theme }: any) =>
    dataTextIsBig ? theme.fontSize.xl : theme.fontSize.m};
  line-height: ${({ dataTextIsBig }: any) =>
    dataTextIsBig ? '40px' : '18.75px'};
  color: ${({ theme }) => theme.fontColor.white};
  margin-top: ${({ dataTextIsBig }: any) => (dataTextIsBig ? '8px' : '0px')};

  @media only screen and (min-width: 768px) {
    font-size: ${({ dataTextIsBig, theme }: any) =>
      dataTextIsBig ? theme.fontSize.xl : theme.fontSize.xm};
    line-height: ${({ dataTextIsBig }: any) =>
      dataTextIsBig ? '49px' : '21.09px'};
  }

  @media only screen and (min-width: 1200px) {
    font-size: ${({ dataTextIsBig, theme }: any) =>
      dataTextIsBig ? theme.fontSize.xxl : theme.fontSize.xm};
    margin-top: ${({ dataTextIsBig }: any) => (dataTextIsBig ? '12px' : '0px')};
  }
`;
