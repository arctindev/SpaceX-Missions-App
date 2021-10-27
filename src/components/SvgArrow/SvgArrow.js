import React from 'react';
import { ArrowWrapper } from './SvgArrow.styles';
import { ReactComponent as ArrowLeft } from '../../assets/leftArrow.svg';
import { ReactComponent as ArrowRight } from '../../assets/rightArrow.svg';

export const SvgArrow = ({ arrowType = 'left', isActive = true }) => {
  return (
    <ArrowWrapper isActive={isActive} arrowType={arrowType}>
      {arrowType === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </ArrowWrapper>
  );
};
