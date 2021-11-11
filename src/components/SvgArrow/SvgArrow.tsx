import React from 'react';
import { ArrowWrapper } from './SvgArrow.styles';
import { ReactComponent as ArrowLeft } from '../../assets/leftArrow.svg';
import { ReactComponent as ArrowRight } from '../../assets/rightArrow.svg';

interface SvgArrowProps {
  isActive: boolean;
  arrowType: string;
  onClick: () => void;
}

export const SvgArrow = (props: SvgArrowProps) => {
  return (
    <ArrowWrapper
      {...props}
      isActive={props.isActive}
      arrowType={props.arrowType}
    >
      {props.arrowType === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </ArrowWrapper>
  );
};
