import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1140px;
  margin: auto;
  grid-row: 1/1;
  border-bottom: 1px solid ${({ theme }) => theme.componentColor.grey};

  @media only screen and (min-width: 768px) {
    max-width: 1200px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Navigation = styled.nav`
  min-height: 86px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 550px;

  & > svg {
    width: 200px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 900px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
    min-height: 150px;
    & > svg {
      width: 300px;
    }
  }
`;
