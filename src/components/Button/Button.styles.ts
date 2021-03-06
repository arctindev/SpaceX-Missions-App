import styled from 'styled-components';

interface StyledLinkProps {
  alt: string;
}

export const StyledLink = styled.a<StyledLinkProps>`
  padding: 19px 0;
  background: none;
  color: ${({ theme }) => theme.fontColor.primary};
  border: 2px solid ${({ theme }) => theme.componentColor.primary};
  cursor: pointer;
  margin-bottom: 27px;
  line-height: 16.41px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.default};
  width: 100%;
  text-decoration: none;
  text-align: center;

  &:focus {
    outline-offset: 2px;
    outline: 5px auto blue;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover {
    background-color: ${({ theme }) => theme.componentColor.primary + '15'};
    outline: none;
  }

  &:active {
    background: none;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 160px;
  }
`;

export const StyledButton = styled.button`
  padding: 19px 0;
  background: none;
  color: ${({ theme }) => theme.fontColor.primary};
  border: 2px solid ${({ theme }) => theme.componentColor.primary};
  cursor: pointer;
  margin-bottom: 27px;
  line-height: 16.41px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.default};
  width: 100%;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.componentColor.primary + '15'};
  }

  &:active {
    background: none;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 160px;
  }
`;
