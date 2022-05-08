import request from 'supertest';
import path from 'path';
import sizeOf from 'image-size';
import app from '../index';
import resizing from '../imageResize';

describe('GET /resize', () => {
  it('responds 200 if called api with correctly parameters and image exist', (): void => {
    request(app)
      .get('/resize?fname=fjord.jpg&height=150&width=200')
      .expect(200);
  });

  it('created a cashe image with the correct width and height', (): void => {
    request(app)
      .get('/resize?fname=fjord.jpg&height=300&width=250')
      .then(() => {
        const dimensions = sizeOf(
          path.join(__dirname, '../../', '/cashe_images/250_300_fjord.jpg')
        );
        expect(dimensions.height).toEqual(300);
        expect(dimensions.width).toEqual(250);
      });
  });
});


describe('check image process resizing function', () => {
  it('resize a image and stored as cashe', (): void => {
  expect(async () => {
    await resizing(path.join(__dirname, '../../', '/images/fjord.jpg'),path.join(__dirname, '../../', '/cashe_images/250_300_fjord.jpg'),250,300,'fjord.jpg');
}).not.toThrow();
  });
});