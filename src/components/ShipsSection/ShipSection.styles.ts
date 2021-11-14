import styled from 'styled-components';

export const ShipSectionWrapper = styled.div`
  padding: 17px 15px 0px 15px;
  width: 100%;
  max-width: 1140px;
  margin: auto;

  @media only screen and (min-width: 768px) {
    padding: 36px 25px 0px 25px;
    max-width: 900px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 36px 0px 0px 0px;
    max-width: 1140px;
  }
`;

export const ShipCardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const NoShipInfoWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  margin: auto;

  @media only screen and (min-width: 768px) {
    max-width: 900px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const NoShipInfoText = styled.p`
  color: ${({ theme }) => theme.fontColor.primary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
