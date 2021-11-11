const colors = {
  white: '#FFFFFF',
  darkerWhite: '#F4F6FA',
  black: '#000000',
  lighterBlack: "#323237",
  gray: '#868686',
  darkGray: '#5C5C5D',
  lightGray: '#E8E8E8',
  red: '#BE4E35',
  green: '#6FB46E',
}

const borderRadiusValues = {
  s: '4px',
  m: '20px',
}

export const theme = {
  backgroundColor: {
    primary: colors.lighterBlack,
    secondary: colors.black,
  },
  componentColor: {
    primary: colors.white,
    secondary: colors.darkGray,
    darkerPrimary: colors.darkerWhite,
    darkerSecondary: colors.lightGray,
    error: colors.red,
    success: colors.green,
  },
  fontColor: {
    primary: colors.white,
    secondary: colors.gray,
    invertedPrimary: colors.black,
  },
  fontSize: {
    xxl: '42px',
    xl: '34px',
    l: '24px',
    xm: '18px',
    m: '16px',
    s: '14px',
    xs: '12px',
  },
  borderRadius: {
    allCornersS : borderRadiusValues.s,
    allCornersM : borderRadiusValues.m,
    topCornersM : `${borderRadiusValues.m} ${borderRadiusValues.m} 0 0`
  },
  fontWeight: {
    default: '500', // also declared in globalStyle file
    bold: '700',
  }
};

/*
===============================================
paddings:

0px
3px
5px
7px
10px
15px
16px
17px
19px
20px
25px
36px
65px
120px
175px

===============================================
padding: 19px 0; - button

padding: 17px 15px 0px 15px; - missionDetailsSection - mobile
padding: 36px 25px 0px 25px; - missionDetailsSection - tablet
padding: 36px 0px 0px 0px; - missionDetailsSection - desktop

padding-bottom: 65px; - pageContentWrapper - mobile
padding-bottom: 120px; - pageContentWrapper - tablet
padding-bottom: 175px; - pageContentWrapper - desktop

padding: 3px 5px 3px 6px; - recoveredComponent

padding-bottom: 16px; - shipNameHeading

padding: 17px 15px 20px 15px; - shipDetailsWrapper

padding: 17px 15px 0px 15px; - shipSection mobile

padding: 36px 25px 0px 25px; - shipSection tablet

padding: 36px 0px 0px 0px; - shipSection desktop

padding: 7px 10px; - showMoreComponent

==============================================
magrins:

0px
7px
8px
9px
12px
14px
17px
19px
20px
23px
27px
30px
38px
40px

==============================================

margin-bottom: 27px; - button mobile
margin-bottom: 40px; - button tablet

**************************************************
margin-bottom: - DataLabelWrapper mobile
case 'mission_label':
      return '20px';

    case 'rocket_name_label':
      return '30px';

    case 'launch_date':
      return '19px';

    case 'launch_site':
      return '20px';

    case 'rescue_ships_label':
      return '17px';
****************************************************
margin-bottom: - DataLabelWrapper desktop
case 'mission_label':
      return '23px';

    case 'rocket_name_label':
      return '40px';

    case 'launch_date':
      return '23px';

    case 'launch_site':
      return '23px';

    case 'rescue_ships_label':
      return '17px';
****************************************************

margin-bottom: 7px; - dataLabelHeading mobile
margin-bottom: 8px; - dataLabelHeading tablet

margin-top: dataTextIsBig ? '8px' : '0px')}; - datalabelText mobile
margin-top: dataTextIsBig ? '12px' : '0px')}; - datalabelText desktop

margin-left: 9px; - recoveredComponent

margin-bottom: 20px; - shipCardWrapper - mobile
margin-right: 20px; - shipCardWrapper - tablet
margin-right: 30px; - shipCardWrapper - desktop
margin-bottom: 30px; - shipCardWrapper - desktop

margin-bottom: 14px; - shipNameHeading

margin-left: 38px; - shipCard_dataText
=======================================================
border-radius:

4px
20px

=======================================================

border-radius: 4px; - recoveredComponent (done)
border-radius: 20px; - shipCardWrapper (done)
border-radius: 20px 20px 0px 0px; - shipImage (done)
border-radius: 4px; - showMoreComponent (done)

=======================================================
font-weight:

500
700

=======================================================

font-weight: 500; - button (done)
font-weight: 500; - dataLabelHeading (done)
font-weight: 700; - recoveredComponent (done)
font-weight: 700; - shipNameHeading (done)
font-weight: 500; - shipCard_dataHeading (done)
font-weight: 700; - shipCard-dataText (done)
font-weight: 500; - showMoreComponent (done)

*/
