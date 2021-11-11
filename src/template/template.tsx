import React from 'react';
import { TemplateWrapper } from './template.styles';
import { Header } from '../components/Header/Header';

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <TemplateWrapper>
      <Header />
      {children}
    </TemplateWrapper>
  );
};

export default Template;
