import React from 'react';
import { TemplateWrapper } from './template.styles';
import { Header } from '../components/Header/Header';

const Template = ({ children }: any) => {
  return (
    <TemplateWrapper>
      <Header />
      {children}
    </TemplateWrapper>
  );
};

export default Template;
