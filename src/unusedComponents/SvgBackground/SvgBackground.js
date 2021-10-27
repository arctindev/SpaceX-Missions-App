import React from 'react';
import { theme } from '../../styles/themes';
import { StyledSVGBackground } from './SvgBackground.styles';

const SvgBackground = () => {
  return (
    <StyledSVGBackground
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="CustomGradient"
          x1="10"
          y1="7"
          x2="86.5"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            style={{
              stopColor: theme.backgroundColor.linearBlack,
              stopOpacity: 0.5,
            }}
          />
          <stop
            offset="0.9"
            style={{
              stopColor: theme.backgroundColor.linearGrey,
              stopOpacity: 0.9,
            }}
          />
          <stop
            offset="1"
            style={{
              stopColor: theme.backgroundColor.linearGrey,
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        id="SvgPath"
        fill="url(#CustomGradient)"
      />
    </StyledSVGBackground>
  );
};

export default SvgBackground;
