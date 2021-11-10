import React from 'react';
import { StyledButton, StyledLink } from './Button.styles';

interface ButtonProps {
  buttonText: string;
  articleLink?: string;
  isLink?: boolean;
}

export const Button = ({ buttonText, articleLink, isLink }: ButtonProps) =>
  isLink ? (
    <StyledLink href={articleLink}>{buttonText}</StyledLink>
  ) : (
    <StyledButton>{buttonText}</StyledButton>
  );
