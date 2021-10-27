const query = `
{
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
        site_name
      }
      links {
        article_link
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
      }
    }
  }
`;

const queryLink = 'https://api.spacex.land/graphql/';
