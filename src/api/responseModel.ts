export interface shipModel {
  name: string;
  home_port: string;
  image: string | null; // bug
  weight_kg: number | null; // bug
  id: string;
}

export interface MissionDataModel {
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
    site_name: string;
  };
  links: {
    article_link: string | null; //bug
    video_link: string;
  };
  rocket: {
    rocket_name: string;
    first_stage: {
      cores: [
        {
          land_success: boolean;
        }
      ];
    };
  };
  ships: shipModel[] | null; // bug
  id: string;
}
