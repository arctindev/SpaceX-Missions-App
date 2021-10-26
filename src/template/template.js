import React from 'react';
import SvgBackground from '../components/SvgBackground/SvgBackground';
import { TemplateWrapper } from './template.styles';

const Template = ({ children }) => {
  return (
    <TemplateWrapper>
      {/* <SvgBackground /> */}
      {children}
    </TemplateWrapper>
  );
};

export default Template;
