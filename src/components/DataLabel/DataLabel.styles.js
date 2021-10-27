import styled from 'styled-components';

const getMarginValue = (type) => {
  switch (type) {
    case 'mission_label':
      return '20px';

    case 'rocket_name_label':
      return '30px';

    case 'launch_date':
      return '19px';

    case 'launch_site':
      return '20px';

    default:
      throw console.error('Type prop should have a string value');
  }
};

// Props: Type
export const DataLabelWrapper = styled.div`
  margin-bottom: ${({ type }) => getMarginValue(type)};
`;

export const DataLabelHeading = styled.h3`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.fontColor.grey};
  line-height: 16.41px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 7px;
`;

// Props: dataTextIsBig
export const DataLabelText = styled.p`
  font-weight: ${({ dataTextIsBig }) => (dataTextIsBig ? '700' : '500')};
  font-size: ${({ dataTextIsBig, theme }) =>
    dataTextIsBig ? theme.fontSize.l : theme.fontSize.m};
  line-height: ${({ dataTextIsBig }) => (dataTextIsBig ? '40px' : '18.75px')};
  color: ${({ theme }) => theme.fontColor.white};
`;
