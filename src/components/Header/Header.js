import React, {useContext} from 'react';
import { HeaderWrapper } from './Header.styles';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { SvgArrow } from '../SvgArrow/SvgArrow';
import { Navigation } from './Header.styles';
import { MissionContext } from '../../providers/MissionProvider';


export const Header = () => {
    const {nextMission, pastMission, blockPast, blockNext} = useContext(MissionContext);

    const handlePastClick = () => {
        if(!blockPast) {
            pastMission();
        }   
    }
    const handleNextClick = () => {
        if(!blockNext) {
            nextMission();
        }   
    }
  return (
    <HeaderWrapper>
      <Navigation>
        <SvgArrow onClick={handlePastClick} isActive={!blockPast} arrowType="left" />
        <LogoSVG />
        <SvgArrow onClick={handleNextClick} isActive={!blockNext} arrowType="right" />
      </Navigation>
    </HeaderWrapper>
  );
};
