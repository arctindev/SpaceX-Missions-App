import styled from 'styled-components';

export const StyledLink = styled.a`
  padding: 19px 0;
  background: none;
  color: ${({ theme }) => theme.fontColor.primary};
  border: 2px solid ${({ theme }) => theme.componentColor.primary};
  cursor: pointer;
  margin-bottom: 27px;
  line-height: 16.41px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
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

export const StyledButton = styled.button`
  padding: 19px 0;
  background: none;
  color: ${({ theme }) => theme.fontColor.primary};
  border: 2px solid ${({ theme }) => theme.componentColor.primary};
  cursor: pointer;
  margin-bottom: 27px;
  line-height: 16.41px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
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
