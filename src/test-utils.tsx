import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppProviders from './providers/AppProviders';
import { theme } from './styles/themes';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

interface MyProps {
  children?: NonNullable<React.ReactNode>;
}

// default render overwrite
const Providers: React.FC<MyProps> = ({ children }) => <AppProviders>{children}</AppProviders>;
const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

// render only with theme provider
const OnlyThemeProvider: React.FC<MyProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
const renderWithTheme = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: OnlyThemeProvider, ...options });

export * from '@testing-library/react';
export { renderWithTheme as renderWithTheme };
export { customRender as render };
export { userEvent };
