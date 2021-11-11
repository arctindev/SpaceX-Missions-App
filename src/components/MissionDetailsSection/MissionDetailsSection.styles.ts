import styled from 'styled-components';

export const MissionDetailsWrapper = styled.div`
  color: ${({ theme }) => theme.fontColor.primary};
  display: flex;
  flex-direction: column;
  padding: 17px 15px 0px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.componentColor.secondary};
  max-width: 1140px;
  margin: auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 36px 25px 0px 25px;
    max-width: 1200px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 36px 0px 0px 0px;
  }
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 520px;
  justify-content: flex-start;

  @media only screen and (min-width: 768px) {
    width: 50%;
    max-width: 425px;
    margin: 0;
    &:nth-of-type(2n) {
      text-align: right;
    }
  }
`;
