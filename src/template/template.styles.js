import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg';

export const TemplateWrapper = styled.div`
  width: 100%;
  height: 300vh;
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background: linear-gradient(
    120deg,
  rgba(0,0,0,1) 0%,
  rgba(0,0,0,0.738) 19%,
  rgba(0,0,0,0.541) 34%,
  rgba(0,0,0,0.382) 47%,
  rgba(0,0,0,0.278) 56.5%,
  rgba(0,0,0,0.194) 65%,
  rgba(0,0,0,0.126) 73%,
  rgba(0,0,0,0.075) 80.2%,
  rgba(0,0,0,0.042) 86.1%,
  rgba(0,0,0,0.021) 91%,
  rgba(0,0,0,0.008) 95.2%,
  rgba(0,0,0,0.002) 98.2%,
  rgba(0,0,0,0) 100%
); */
`;
