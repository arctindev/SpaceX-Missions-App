import { imgurResizeImage } from '../utils/imgurResizeImage';

describe('imgurResizeImage unit test', () => {
  it('converts the imgur links correctly', () => {
    const testLink1 = 'https://i.imgur.com/MtEgYbY.jpg';
    const testLink1Expected = 'https://i.imgur.com/MtEgYbYl.jpg';

    let result = imgurResizeImage(testLink1);
    expect(result).toEqual(testLink1Expected);

    const testLink2 = 'https://imgur.com/NHsx95l.jpg';
    const testLink2Expected = 'https://imgur.com/NHsx95ll.jpg';

    result = imgurResizeImage(testLink2);
    expect(result).toEqual(testLink2Expected);

    const testLink3 = 'https://i.imgur.com/7VMC0Gn.jpg';
    const testLink3Expected = 'https://i.imgur.com/7VMC0Gnl.jpg';

    result = imgurResizeImage(testLink3);
    expect(result).toEqual(testLink3Expected);

    const testLink4 = 'https://i.imgur.com/ABXtHKa.jpg';
    const testLink4Expected = 'https://i.imgur.com/ABXtHKal.jpg';

    result = imgurResizeImage(testLink4);
    expect(result).toEqual(testLink4Expected);
  });

  // ==================================================================

  it('returns original link if the imagehost is not imgur', () => {
    const testLink1 = 'https://i.imgussr.com/MtEgYbY.jpg';
    const testLink1Expected = 'https://i.imgussr.com/MtEgYbYl.jpg';

    let result = imgurResizeImage(testLink1);
    expect(result).not.toEqual(testLink1Expected);

    const testLink2 = 'https://imageHost.com/NHsx95l.jpg';
    const testLink2Expected = 'https://imageHost.com/NHsx95ll.jpg';

    result = imgurResizeImage(testLink2);
    expect(result).not.toEqual(testLink2Expected);

    const testLink3 = 'http:ss.ss';
    const testLink3Expected = 'http:ssl.ss';

    result = imgurResizeImage(testLink3);
    expect(result).not.toEqual(testLink3Expected);
  });
});
