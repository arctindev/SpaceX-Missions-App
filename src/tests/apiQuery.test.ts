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
        // mission_name
        expect(typeof responseObject.mission_name).toEqual('string');
        // launch_date_local
        expect(typeof responseObject.launch_date_local).toEqual('string');
        // launch_site
        expect(typeof responseObject.launch_site).toEqual('object');
        expect(responseObject.launch_site !== null).toBeTruthy();
        // launch_site.site_name_long
        expect(typeof responseObject.launch_site.site_name_long).toEqual('string');
        // launch_site.site_name
        expect(typeof responseObject.launch_site.site_name).toEqual('string');
        // links
        expect(typeof responseObject.links).toEqual('object');
        expect(responseObject.links !== null).toBeTruthy();
        // links.article_link - bug
        expect(
          typeof responseObject.links.article_link === 'string' ||
            responseObject.links.article_link === null
        ).toBeTruthy();
        // links.video_link
        expect(typeof responseObject.links.video_link).toEqual('string');
        // rocket
        expect(typeof responseObject.rocket).toEqual('object');
        expect(responseObject.rocket !== null).toBeTruthy();
        // rocket.rocket_name
        expect(typeof responseObject.rocket.rocket_name).toEqual('string');
        // rocket.first_stage
        expect(typeof responseObject.rocket.first_stage).toEqual('object');
        expect(responseObject.rocket.first_stage !== null).toBeTruthy();
        // rocket.first_stage.cores
        expect(Array.isArray(responseObject.rocket.first_stage.cores)).toBeTruthy();
        // rocket.first.stage.cores[0]
        expect(typeof responseObject.rocket.first_stage.cores[0]).toEqual('object');
        expect(responseObject.rocket.first_stage.cores[0] !== null).toBeTruthy();
        // rocket.first.stage.cores[0].land_success
        expect(
          typeof responseObject.rocket.first_stage.cores[0].land_success === 'boolean' ||
            responseObject.rocket.first_stage.cores[0].land_success === null
        ).toBeTruthy();
        expect(Array.isArray(responseObject.ships)).toBeTruthy();
        // ships mapping
        if (responseObject.ships.length > 0) {
          for (let j = 0; j < responseObject.ships.length; j++) {
            //ships - null in array bug
            if (responseObject.ships[j] !== null) {
              expect(typeof responseObject.ships[j]).toEqual('object');
              // ships.name
              expect(typeof responseObject.ships[j].name).toEqual('string');
              // ships.home_port
              expect(typeof responseObject.ships[j].home_port).toEqual('string');
              // ships.image - null in image bug
              expect(
                typeof responseObject.ships[j].image === 'string' ||
                  responseObject.ships[j].image === null
              ).toBeTruthy();
              // ships.weight_kg - null in weight bug
              expect(
                typeof responseObject.ships[j].weight_kg === 'number' ||
                  responseObject.ships[j].weight_kg === null
              ).toBeTruthy();
              // ships.id
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
