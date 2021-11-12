import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppProviders from './providers/AppProviders';

interface MyProps {
  children?: NonNullable<React.ReactNode>;
}

const Providers: React.FC<MyProps> = ({ children }) => <AppProviders>{children}</AppProviders>;

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
