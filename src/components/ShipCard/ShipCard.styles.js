import styled from 'styled-components';

export const ShipCardWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  min-height: 340px;
  background-color: ${({ theme }) => theme.componentColor.white};
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ShipImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px 20px 0px 0px;
`;

export const ShipNameHeading = styled.h2`
  font-weight: 700;
  line-height: 24px;
  font-size: ${({ theme }) => theme.fontSize.xm};
  color: ${({ theme }) => theme.fontColor.black};
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.componentColor.lightGrey};
  margin-bottom: 14px;
`;

export const ShipDetailsWrapper = styled.div`
  padding: 17px 15px 20px 15px;
`;

export const DataLabelWrapper = styled.div`
  display: flex;
`;

export const DataHeading = styled.h3`
  width: 82px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.fontColor.grey};
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
`;

export const DataText = styled.p`
  margin-left: 38px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.fontColor.black};
  line-height: 24px;
  font-weight: 700;
`;
