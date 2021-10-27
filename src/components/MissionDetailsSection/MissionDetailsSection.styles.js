import styled from 'styled-components';

export const MissionDetailsWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 17px 15px 0px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.componentColor.grey};
  max-width: 1140px;
  margin: auto;
`;
