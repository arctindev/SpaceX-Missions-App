import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  min-height: 86px;
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/1;
  border-bottom: 1px solid ${({ theme }) => theme.componentColor.grey};
`;
