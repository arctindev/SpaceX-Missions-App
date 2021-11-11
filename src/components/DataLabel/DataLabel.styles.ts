import styled from 'styled-components';
import { getMobileMarginValue, getDesktopMarginValue } from './DataLabelUtils';

interface DataLabelWrapperProps {
  type: string; 
}

export const DataLabelWrapper = styled.div<DataLabelWrapperProps>`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin: auto;
  text-align: inherit;
  margin-bottom: ${({ type }) => getMobileMarginValue(type)};

  @media only screen and (min-width: 768px) {
    margin: 0; // reseting margin auto
    margin-bottom: ${({ type }) => getDesktopMarginValue(type)};
  }
`;

interface DataLabelHeadingProps {
  isHeadingBigger?: boolean; 
}

export const DataLabelHeading = styled.h3<DataLabelHeadingProps>`
  font-weight: ${({ theme }) => theme.fontWeight.default};
  font-size: ${({ isHeadingBigger, theme }) =>
    isHeadingBigger ? theme.fontSize.m : theme.fontSize.s};
  color: ${({ theme }) => theme.fontColor.secondary};
  line-height: ${({ isHeadingBigger }) =>
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

interface DataLabelTextProps {
  dataTextIsBig?: boolean;
}

export const DataLabelText = styled.p<DataLabelTextProps>`
  display: inline;
  font-weight: ${({ dataTextIsBig, theme }) => (dataTextIsBig ? theme.fontWeight.bold : theme.fontWeight.default)};
  font-size: ${({ dataTextIsBig, theme }) =>
    dataTextIsBig ? theme.fontSize.xl : theme.fontSize.m};
  line-height: ${({ dataTextIsBig }) =>
    dataTextIsBig ? '40px' : '18.75px'};
  color: ${({ theme }) => theme.fontColor.primary};
  margin-top: ${({ dataTextIsBig }) => (dataTextIsBig ? '8px' : '0px')};

  @media only screen and (min-width: 768px) {
    font-size: ${({ dataTextIsBig, theme }) =>
      dataTextIsBig ? theme.fontSize.xl : theme.fontSize.xm};
    line-height: ${({ dataTextIsBig }) =>
      dataTextIsBig ? '49px' : '21.09px'};
  }

  @media only screen and (min-width: 1200px) {
    font-size: ${({ dataTextIsBig, theme }) =>
      dataTextIsBig ? theme.fontSize.xxl : theme.fontSize.xm};
    margin-top: ${({ dataTextIsBig }) => (dataTextIsBig ? '12px' : '0px')};
  }
`;
