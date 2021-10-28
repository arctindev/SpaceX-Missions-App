import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg';

export const TemplateWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-template-rows: 86px 1fr;

  @media only screen and (min-width: 1200px) {
    grid-template-rows: 150px 1fr;
  }
`;
