import React from 'react';
import { MissionDetailsWrapper } from './MissionDetailsSection.styles';
import { DataLabel } from '../DataLabel/DataLabel';
import { Button } from '../Button/Button';
import { data } from '../../mocks/data';

const MissionDetailsSection = () => {
  return (
    <MissionDetailsWrapper>
      <DataLabel
        dataTextIsBig
        headingText="MISSION"
        data={data[0].mission_name}
        type="mission_label"
      />
      <DataLabel
        hasRecoveredComponent={{
          data: data[0].rocket.first_stage.cores[0].land_success,
        }}
        headingText="ROCKET"
        data={data[0].rocket.rocket_name}
        type="rocket_name_label"
      />
      <Button buttonText="LEARN MORE" />
      <DataLabel
        headingText="LAUNCH DATE"
        data={data[0].launch_date_local.replace('T', ' ')}
        type="launch_date"
      />
      <DataLabel
        headingText="LAUNCH SITE"
        data={data[0].launch_site.site_name}
        type="launch_site"
      />
    </MissionDetailsWrapper>
  );
};

export default MissionDetailsSection;
