import styled from 'styled-components';

export const StyledSpan = styled.span`
  position: absolute;
  padding: 7px 10px;
  font-weight: ${({ theme }) => theme.fontWeight.default};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 16px;
  background: ${({ theme }) => theme.componentColor.primary};
  color: ${({ theme }) => theme.fontColor.invertedPrimary};
  bottom: -30px;
  right: 55px;
  border-radius: ${({ theme }) => theme.borderRadius.allCornersS};

  @media only screen and (min-width: 768px) {
    white-space: nowrap;
  }
`;
