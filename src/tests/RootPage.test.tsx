import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import Root from '../pages/Root';
import { queryParams } from '../api/query';

const missionLabelString1 = 'Sentinel-6 Michael Freilich';
const missionLabelString2 = 'Crew-1';

describe('Root Tests', () => {
  it('Renders the app correctly', async () => {
    render(<Root />);
    const missionLabelHeader = await screen.findByText(/MISSION/);
    expect(missionLabelHeader).toBeInTheDocument();
  });

  // =====================================================================

  it('Renders loader component correctly', async () => {
    render(<Root />);

    const loaderComponent = screen.getByTestId('Loader');
    expect(loaderComponent).toBeInTheDocument();

    const missionLabelHeader = await screen.findByText(/MISSION/);
    expect(missionLabelHeader).toBeInTheDocument();

    expect(loaderComponent).not.toBeInTheDocument();
  });

  // =====================================================================

  it('Successfuly navigate to next and previous mission', async () => {
    render(<Root />);

    //If apiQuery tests are successfull you might need to check the const variables of missionLabelStrings because they could be not equal
    let missionLabelData = await screen.findByText(missionLabelString1);

    expect(missionLabelData).toBeInTheDocument();
    expect(missionLabelData.innerHTML).toEqual(missionLabelString1);

    const nextButton = screen.getByTestId('goNext');
    const previousButton = screen.getByTestId('goPrevious');
    fireEvent.click(nextButton);

    expect(missionLabelData).toBeInTheDocument();
    expect(missionLabelData.innerHTML).not.toEqual(missionLabelString1);
    expect(missionLabelData.innerHTML).toEqual(missionLabelString2);

    fireEvent.click(previousButton);

    expect(missionLabelData).toBeInTheDocument();
    expect(missionLabelData.innerHTML).not.toEqual(missionLabelString2);
    expect(missionLabelData.innerHTML).toEqual(missionLabelString1);
  });

  // =====================================================================

  it('Successfully disables/enables previous and next buttons', async () => {
    render(<Root />);

    const nextButton = screen.getByTestId('goNext');
    const previousButton = screen.getByTestId('goPrevious');

    expect(nextButton).toBeDisabled();
    expect(previousButton).toBeDisabled();

    //If apiQuery tests are successfull you might need to check the const variables of missionLabelStrings because they could be not equal
    let missionLabelData = await screen.findByText(missionLabelString1);

    expect(missionLabelData).toBeInTheDocument();
    expect(missionLabelData.innerHTML).toEqual(missionLabelString1);

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    for (let i = 0; i < queryParams.queryLimit - 2; i++) {
      fireEvent.click(nextButton);
    }

    expect(nextButton).toBeDisabled();
    expect(previousButton).not.toBeDisabled();

    fireEvent.click(previousButton);

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    for (let i = 0; i < queryParams.queryLimit - 2; i++) {
      fireEvent.click(previousButton);
    }

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
});
