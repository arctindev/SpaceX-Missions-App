import React from 'react';
import { StyledSpan } from './ShowMoreComponent.styles';

interface ShowMoreComponentProps {
  data: string | undefined;
}

export const ShowMoreComponent = ({ data }: ShowMoreComponentProps) => {
  return <StyledSpan>{data}</StyledSpan>;
};
