import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 86px 1fr;
  background: ${({ theme }) =>
    `linear-gradient(105deg, ${theme.backgroundColor.secondary} 0%, ${theme.backgroundColor.primary} 120%)`};
  @media only screen and (min-width: 768px) {
    background: ${({ theme }) =>
      `linear-gradient(125deg, ${theme.backgroundColor.secondary} 0%, ${theme.backgroundColor.primary} 110%)`};
  }
  @media only screen and (min-width: 1200px) {
    grid-template-rows: 150px 1fr;
    background: ${({ theme }) =>
      `linear-gradient(150deg, ${theme.backgroundColor.secondary} 15%, ${theme.backgroundColor.primary} 100%)`};
  }
`;
