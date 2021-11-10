import React from 'react';
import { StyledRecoveredComponent } from './RecoveredComponent.styles';

interface RecoveredComponentProps {
  isRecovered: boolean;
}

export const RecoveredComponent = ({
  isRecovered,
}: RecoveredComponentProps) => (
  <StyledRecoveredComponent isRecovered={isRecovered}>
    {isRecovered ? 'RECOVERED' : 'UNRECOVERED'}
  </StyledRecoveredComponent>
);
