import React from 'react';
import { HeaderWrapper } from './Header.styles';
import { ReactComponent as MobileLogoSVG } from '../../assets/logoMobile.svg';
import { SvgArrow } from '../SvgArrow/SvgArrow';

export const Header = () => {
  return (
    <HeaderWrapper>
      <SvgArrow isActive={false} arrowType="left" />
      <MobileLogoSVG />
      <SvgArrow arrowType="right" />
    </HeaderWrapper>
  );
};
