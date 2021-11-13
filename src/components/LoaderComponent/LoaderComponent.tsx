import React from 'react';
import { StyledLoaderWrapper, LoaderAnimation } from './LoaderComponent.styles';

const LoaderComponent = () => {
  return (
    <StyledLoaderWrapper>
      <LoaderAnimation>
        <div />
        <div />
        <div />
        <div />
      </LoaderAnimation>
    </StyledLoaderWrapper>
  );
};

export default LoaderComponent;
