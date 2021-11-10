export const getMobileMarginValue = (type: string) => {
  switch (type) {
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

    default:
      throw console.error('Type prop should have a string value');
  }
};

export const getDesktopMarginValue = (type: string) => {
  switch (type) {
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

    default:
      throw console.error('Type prop should have a string value');
  }
};
