import React from 'react';
import { StyledRecoveredComponent } from './RecoveredComponent.styles';
import ScreenReaderHeader from '../ScreenReaderHeader/ScreenReaderHeader'

interface RecoveredComponentProps {
  isRecovered: boolean;
}

export const RecoveredComponent = ({ isRecovered }: RecoveredComponentProps) => (
  <>
  <ScreenReaderHeader headingText="Recovery state" type='h2'/>
  <StyledRecoveredComponent isRecovered={isRecovered}>
    {isRecovered ? 'RECOVERED' : 'UNRECOVERED'}
  </StyledRecoveredComponent>
  </>
);
