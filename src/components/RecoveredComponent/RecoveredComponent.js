import React from 'react';
import { StyledRecoveredComponent } from './RecoveredComponent.styles';

export const RecoveredComponent = ({ isRecovered }) => (
  <StyledRecoveredComponent isRecovered={isRecovered}>
    {isRecovered ? 'RECOVERED' : 'UNRECOVERED'}
  </StyledRecoveredComponent>
);
