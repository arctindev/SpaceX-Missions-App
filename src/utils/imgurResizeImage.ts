const imageSize = 'l';
// s =   90×  90 = Small Square
// b =  160× 160 = Big Square
// t =  160× 160 = Small Thumbnail
// m =  320× 320 = Medium Thumbnail
// l =  640× 640 = Large Thumbnail
// h = 1024×1024 = Huge Thumbnail
// because of mobile max image width 520px 640x640 size might be the best option

export const imgurResizeImage = (link: string): string => {
  if (!link.includes('imgur')) {
    return link;
  }
  let temp = link.split('.');
  temp[temp.length - 2] += imageSize;
  return temp.join('.');
};
