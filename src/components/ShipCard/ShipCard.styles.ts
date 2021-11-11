import styled from 'styled-components';

export const ShipCardWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  min-height: 340px;
  background-color: ${({ theme }) => theme.componentColor.primary};
  border-radius: ${({ theme }) => theme.borderRadius.allCornersM};
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    max-width: 520px;
    width: calc(50% - 10px);
    margin-right: 20px;
    &:nth-of-type(2n) {
      margin-right: 0px;
    }
  }
  @media only screen and (min-width: 1200px) {
    max-width: 360px;
    margin-right: 30px;
    margin-bottom: 30px;
    &:nth-of-type(2n) {
      margin-right: 30px;
    }
    &:nth-of-type(3n) {
      margin-right: 0px;
    }
  }
`;

export const ShipImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 50% 65%;
  border-radius: ${({ theme }) => theme.borderRadius.topCornersM};
`;

export const ShipNameHeading = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 24px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.fontColor.invertedPrimary};
  padding-bottom: 16px;
  border-bottom: 1px solid
    ${({ theme }) => theme.componentColor.darkerSecondary};
  margin-bottom: 14px;
`;

export const ShipDetailsWrapper = styled.div`
  padding: 17px 15px 20px 15px;
`;

export const DataLabelWrapper = styled.div`
  display: flex;
`;

export const DataHeading = styled.h3`
  min-width: 82px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.fontColor.secondary};
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.default};
`;

export const DataText = styled.p`
  margin-left: 38px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.fontColor.invertedPrimary};
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
