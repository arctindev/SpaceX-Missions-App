import React from 'react';
import { HeaderWrapper } from './Header.styles';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { SvgArrow } from '../SvgArrow/SvgArrow';
import { Navigation } from './Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation>
        <SvgArrow isActive={false} arrowType="left" />
        <LogoSVG />
        <SvgArrow arrowType="right" />
      </Navigation>
    </HeaderWrapper>
  );
};
