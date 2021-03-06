import React from 'react';
import { MissionDetailsWrapper, FlexColumnWrapper } from './MissionDetailsSection.styles';
import { DataLabel } from '../DataLabel/DataLabel';
import { Button } from '../Button/Button';
import { MissionDataModel } from '../../api/responseModel';
import ScreenReaderHeader from '../ScreenReaderHeader/ScreenReaderHeader';

interface MissionDetailsSectionProps {
  missionData: MissionDataModel;
}

const MissionDetailsSection = ({ missionData }: MissionDetailsSectionProps) => {
  return (
    <MissionDetailsWrapper>
      <ScreenReaderHeader headingText="Mission Details" type="h1" />
      <FlexColumnWrapper>
        <DataLabel
          dataTextIsBig
          headingText="MISSION"
          data={missionData.mission_name}
          type="mission_label"
          screenReaderHelper="Mission name"
        />
        <DataLabel
          hasRecoveredComponent={{
            data: missionData.rocket.first_stage.cores[0].land_success,
          }}
          headingText="ROCKET"
          data={missionData.rocket.rocket_name}
          type="rocket_name_label"
          screenReaderHelper="Rocket name"
        />
        <Button
          isLink
          articleLink={
            !missionData.links.article_link
              ? missionData.links.video_link
              : missionData.links.article_link
          }
          buttonText="LEARN MORE"
        />
      </FlexColumnWrapper>
      <FlexColumnWrapper>
        <DataLabel
          headingText="LAUNCH DATE"
          data={missionData.launch_date_local.replace('T', ' ')}
          type="launch_date"
        />
        <DataLabel
          headingText="LAUNCH SITE"
          data={missionData.launch_site.site_name}
          longerData={missionData.launch_site.site_name_long}
          type="launch_site"
        />
      </FlexColumnWrapper>
    </MissionDetailsWrapper>
  );
};

export default MissionDetailsSection;
