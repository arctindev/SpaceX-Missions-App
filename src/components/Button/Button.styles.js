import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 19px 0;
  background: none;
  color: ${({ theme }) => theme.fontColor.white};
  border: 2px solid ${({ theme }) => theme.componentColor.white};
  cursor: pointer;
  margin-bottom: 27px;
  line-height: 16.41px;
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: 500;
`;
