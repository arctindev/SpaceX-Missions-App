import styled from 'styled-components';

interface RecoveredComponentProps {
  isRecovered: boolean;
}

export const StyledRecoveredComponent = styled.p<RecoveredComponentProps>`
  display: inline;
  color: ${({ theme }) => theme.fontColor.invertedPrimary};
  background-color: green;
  margin-left: 9px;
  border-radius: ${({ theme }) => theme.borderRadius.allCornersS};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 3px 5px 3px 6px;
  background-color: ${({ theme, isRecovered }) =>
    isRecovered ? theme.componentColor.success : theme.componentColor.error};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.1em;
  line-height: 14px;
`;
