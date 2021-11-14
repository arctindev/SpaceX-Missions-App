import React from 'react';
import { StyledLoaderWrapper, LoaderAnimation } from './LoaderComponent.styles';

const LoaderComponent = () => {
  return (
    <StyledLoaderWrapper data-testid="Loader">
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
