import styled from 'styled-components';

interface RecoveredComponentProps {
  isRecovered: boolean;
}

export const StyledRecoveredComponent = styled.span<RecoveredComponentProps>`
  color: ${({ theme }) => theme.fontColor.invertedPrimary};
  background-color: green;
  margin-left: 9px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 3px 5px 3px 6px;
  background-color: ${({ theme, isRecovered }) =>
    isRecovered ? theme.componentColor.success : theme.componentColor.error};
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 14px;
`;
