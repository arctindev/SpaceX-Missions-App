import React from 'react';
import { StyledButton } from './Button.styles';

export const Button = ({ buttonText, articleLink }) => (
  <StyledButton href={articleLink}>{buttonText}</StyledButton>
);
