import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MissionProvider } from './MissionProvider';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/themes';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MissionProvider>{children}</MissionProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
