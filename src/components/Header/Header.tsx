import React, { useContext } from 'react';
import { HeaderWrapper } from './Header.styles';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { SvgArrow } from '../SvgArrow/SvgArrow';
import { Navigation } from './Header.styles';
import { MissionContext } from '../../providers/MissionProvider';

export const Header = () => {
  const { nextMission, previousMission, blockPrevious, blockNext } =
    useContext(MissionContext);

  const handlePreviousClick = () => {
    if (!blockPrevious) {
      previousMission();
    }
  };
  const handleNextClick = () => {
    if (!blockNext) {
      nextMission();
    }
  };
  return (
    <HeaderWrapper>
      <Navigation>
        <SvgArrow
          onClick={handlePreviousClick}
          isActive={!blockPrevious}
          arrowType="left"
        />
        <LogoSVG title="Website Logo" />
        <SvgArrow
          onClick={handleNextClick}
          isActive={!blockNext}
          arrowType="right"
        />
      </Navigation>
    </HeaderWrapper>
  );
};
