import React from 'react';
import { TemplateWrapper } from './template.styles';
import { Header } from '../components/Header/Header';

const Template = ({ children }) => {
  return (
    <TemplateWrapper>
      <Header />
      {children}
    </TemplateWrapper>
  );
};

export default Template;
