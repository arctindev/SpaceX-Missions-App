import axios from 'axios';
import { query, queryLink, queryParams } from '../api/query';

describe('Api query response test', () => {
  it('gets successfull status code', async () => {
    try {
      const response = await axios.post(queryLink, {
        query,
      });

      expect(response.status).toEqual(200);
      expect(response.status).not.toEqual(500);

      expect(response.headers['content-type']).toEqual(
        'application/json; charset=utf-8'
      );
    } catch (err) {
      throw err;
    }
  });

  // ===================================================================

  it('successfully gets a limited array of objects', async () => {
    try {
      const response = await axios.post(queryLink, {
        query,
      });

      const responseArray = response.data.data.launchesPast;

      expect(responseArray.length).toEqual(queryParams.queryLimit);
    } catch (err) {
      throw err;
    }
  });

  // ====================================================================

  it('successfully gets expected types of response object', async () => {
    try {
      const response = await axios.post(queryLink, {
        query,
      });
      
      const responseArray = response.data.data.launchesPast;

      for (let i = 0; i < responseArray.length; i++) {
        const responseObject = response.data.data.launchesPast[0];

        expect(typeof responseObject.mission_name).toEqual('string');
        expect(typeof responseObject.launch_date_local).toEqual('string');
        expect(typeof responseObject.launch_site).toEqual('object');
        expect(typeof responseObject.launch_site.site_name_long).toEqual(
          'string'
        );
        expect(typeof responseObject.launch_site.site_name).toEqual('string');
        expect(typeof responseObject.links).toEqual('object');
        expect(typeof responseObject.links.article_link).toEqual('string');
        expect(typeof responseObject.links.video_link).toEqual('string');
        expect(typeof responseObject.rocket).toEqual('object');
        expect(typeof responseObject.rocket.rocket_name).toEqual('string');
        expect(typeof responseObject.rocket.first_stage).toEqual('object');
        expect(typeof responseObject.rocket.first_stage.cores[0]).toEqual(
          'object'
        );
        expect(
          Array.isArray(responseObject.rocket.first_stage.cores)
        ).toBeTruthy();
        expect(
          typeof responseObject.rocket.first_stage.cores[0].land_success
        ).toEqual('boolean');
        expect(Array.isArray(responseObject.ships)).toBeTruthy();

        if (responseObject.ships.length != 0) {
          for (let i = 0; i < responseObject.ships.length; i++) {
            expect(typeof responseObject.ships[i].name).toEqual('string');
            expect(typeof responseObject.ships[i].home_port).toEqual('string');
            expect(typeof responseObject.ships[i].image).toEqual('string');
            expect(
              typeof responseObject.ships[i].weight_kg === 'number' ||
                typeof responseObject.ships[i].weight_kg === null
            ).toBeTruthy();
            expect(typeof responseObject.ships[i].id).toEqual('string');
          }
        }
      }
    } catch (err) {
      throw err;
    }
  });
});
