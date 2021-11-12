import styled from 'styled-components';

interface SvgArrowProps {
  isActive: boolean;
  arrowType: string;
}

export const ArrowWrapper = styled.button<SvgArrowProps>`
  position: absolute;
  top: 50%;
  left: ${({ arrowType }) => (arrowType === 'left' ? '20px' : 'auto')};
  right: ${({ arrowType }) => (arrowType === 'right' ? '20px' : 'auto')};
  transform: translateY(-50%);
  background: none;
  border: none;
  & > svg {
    cursor: ${({ isActive }) => (isActive ? 'pointer' : '')};
    & > path {
      fill: ${({ theme, isActive }) =>
        isActive ? theme.componentColor.darkerPrimary : theme.componentColor.secondary};
    }
  }
  @media only screen and (min-width: 768px) {
    left: ${({ arrowType }) => (arrowType === 'left' ? '30px' : 'auto')};
    right: ${({ arrowType }) => (arrowType === 'right' ? '30px' : 'auto')};
  }

  @media only screen and (min-width: 1200px) {
    left: ${({ arrowType }) => (arrowType === 'left' ? '0px' : 'auto')};
    right: ${({ arrowType }) => (arrowType === 'right' ? '0px' : 'auto')};
  }
`;
