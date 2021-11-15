import styled from "styled-components";

export const ErrorWrapper = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.p`
  color: ${({theme}) => theme.fontColor.primary};
  font-size: ${({theme}) => theme.fontSize.xl};
`;