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

      expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
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
        const responseObject = response.data.data.launchesPast[i];
        expect(responseObject !== null).toBeTruthy();

        expect(typeof responseObject.mission_name).toEqual('string');
        expect(typeof responseObject.launch_date_local).toEqual('string');

        expect(typeof responseObject.launch_site).toEqual('object');
        expect(responseObject.launch_site !== null).toBeTruthy();

        expect(typeof responseObject.launch_site.site_name_long).toEqual('string');
        expect(typeof responseObject.launch_site.site_name).toEqual('string');
        expect(typeof responseObject.links).toEqual('object');
        expect(responseObject.links !== null).toBeTruthy();

        expect(
          typeof responseObject.links.article_link === 'string' ||
            responseObject.links.article_link === null
        ).toBeTruthy();

        expect(typeof responseObject.links.video_link).toEqual('string');
        expect(typeof responseObject.rocket).toEqual('object');
        expect(responseObject.rocket !== null).toBeTruthy();

        expect(typeof responseObject.rocket.rocket_name).toEqual('string');
        expect(typeof responseObject.rocket.first_stage).toEqual('object');
        expect(responseObject.rocket.first_stage !== null).toBeTruthy();

        expect(Array.isArray(responseObject.rocket.first_stage.cores)).toBeTruthy();
        expect(typeof responseObject.rocket.first_stage.cores[0]).toEqual('object');
        expect(responseObject.rocket.first_stage.cores[0] !== null).toBeTruthy();

        expect(
          typeof responseObject.rocket.first_stage.cores[0].land_success === 'boolean' ||
            responseObject.rocket.first_stage.cores[0].land_success === null
        ).toBeTruthy();
        expect(Array.isArray(responseObject.ships)).toBeTruthy();

        if (responseObject.ships.length > 0) {
          for (let j = 0; j < responseObject.ships.length; j++) {
            if (responseObject.ships[j] !== null) {
              expect(typeof responseObject.ships[j]).toEqual('object');
              expect(typeof responseObject.ships[j].name).toEqual('string');
              expect(typeof responseObject.ships[j].home_port).toEqual('string');
              expect(typeof responseObject.ships[j].image).toEqual('string');
              expect(
                typeof responseObject.ships[j].weight_kg === 'number' ||
                  responseObject.ships[j].weight_kg === null
              ).toBeTruthy();
              expect(typeof responseObject.ships[j].id).toEqual('string');
            }
          }
        }
      }
    } catch (err) {
      throw err;
    }
  });
});
