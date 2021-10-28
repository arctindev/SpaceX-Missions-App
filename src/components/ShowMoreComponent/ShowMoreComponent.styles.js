import styled from 'styled-components';

export const StyledSpan = styled.span`
  position: absolute;
  padding: 7px 10px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 16px;
  background: ${({ theme }) => theme.componentColor.white};
  color: ${({ theme }) => theme.fontColor.black};
  bottom: -30px;
  right: 55px;
  border-radius: 4px;
  
  @media only screen and (min-width: 768px) {
    white-space: nowrap;
  }
`;
