export const queryParams = {
  queryLimit: 5,
  querySortByLabel: 'launch_date_local',
  querySortOrder: 'DESC', // DESC | ASC
};

export const query = `
{
  launchesPast(limit: ${queryParams.queryLimit}, sort: "${queryParams.querySortByLabel}", order: "${queryParams.querySortOrder}") {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_name
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          land_success
        }
      }
    }
    ships {
      name
      home_port
      image
      weight_kg
      id
    }
    id
  }
}
`;

export const queryLink = 'https://api.spacex.land/graphql/';
