const imageSizeValues = {
  size90x90: 's',
  size160x160: 'b',
  size320x320: 'm',
  size640x640: 'l',
  size1024x1024: 'h',
};
const imageSize = imageSizeValues.size640x640;

// because of mobile max image width 520px 640x640 size might be the best option

export const imgurResizeImage = (link: string | null): string => {
  if (link === null) {
    throw console.error(
      'Null in image, something is wrong with conditional rendering in ShipSection component'
    );
  }
  if (!link.includes('imgur')) {
    return link;
  }
  let temp = link.split('.');
  temp[temp.length - 2] += imageSize;
  return temp.join('.');
};
