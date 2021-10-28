import styled from 'styled-components';

// props: isRecovered
export const StyledRecoveredComponent = styled.span`
  color: black;
  background-color: green;
  margin-left: 9px;
  border-radius: 4px;
  color: ${({ theme }) => theme.fontColor.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 3px 5px 3px 6px;
  background-color: ${({ theme, isRecovered }) =>
    isRecovered ? theme.componentColor.green : theme.componentColor.red};
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 14px;
`;
