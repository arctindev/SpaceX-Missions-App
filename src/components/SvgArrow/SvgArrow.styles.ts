import styled from 'styled-components';

export const ArrowWrapper = styled.button`
  position: absolute;
  top: 50%;
  left: ${({ arrowType }: any) => (arrowType === 'left' ? '20px' : 'auto')};
  right: ${({ arrowType }: any) => (arrowType === 'right' ? '20px' : 'auto')};
  transform: translateY(-50%);
  background: none;
  border: none;
  & > svg {
    cursor: ${({ isActive }: any) => (isActive ? 'pointer' : '')};
    & > path {
      fill: ${({ theme, isActive }: any) =>
        isActive
          ? theme.componentColor.darkerWhite
          : theme.componentColor.grey};
    }
  }
  @media only screen and (min-width: 768px) {
    left: ${({ arrowType }: any) => (arrowType === 'left' ? '30px' : 'auto')};
    right: ${({ arrowType }: any) => (arrowType === 'right' ? '30px' : 'auto')};
  }

  @media only screen and (min-width: 1200px) {
    left: ${({ arrowType }: any) => (arrowType === 'left' ? '0px' : 'auto')};
    right: ${({ arrowType }: any) => (arrowType === 'right' ? '0px' : 'auto')};
  }
`;
