import styled from 'styled-components';

export const ArrowWrapper = styled.button`
    position: absolute;
    top: 50%;
    left: ${({ arrowType }) => (arrowType === 'left' ? '20px' : 'auto')};
    right: ${({ arrowType }) => (arrowType === 'right' ? '20px' : 'auto')};
    transform: translateY(-50%);
    background: none;
    border: none;
  & > svg {
    cursor: ${({isActive}) => isActive? 'pointer' : ''};
    & > path {
      fill: ${({ theme, isActive }) =>
        isActive
          ? theme.componentColor.darkerWhite
          : theme.componentColor.grey};
    }
  }
`;
