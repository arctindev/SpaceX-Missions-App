import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import Root from '../pages/Root';

const missionLabelString1 = 'Sentinel-6 Michael Freilich';
const missionLabelString2 = 'Crew-1';

describe('Root Tests', () => {
  it('Renders the app correctly', async () => {
    render(<Root />);
    const missionLabelHeader = await screen.findByText(/MISSION/);
    expect(missionLabelHeader).toBeInTheDocument();
  });

  // =====================================================================

  it('Successfuly navigate to next and previous mission', async () => {
    render(<Root />);

    try {
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
    } catch (err) {
      console.error(
        'If apiQuery tests are successfull you might need to check the const variables of missionLabelStrings because they could be not equal'
      );
      throw err;
    }
  });

  // =====================================================================

  it('Successfully disables/enables previous and next buttons', async () => {
    render(<Root />);
    try {
      let missionLabelData = await screen.findByText(missionLabelString1);

      expect(missionLabelData).toBeInTheDocument();
      expect(missionLabelData.innerHTML).toEqual(missionLabelString1);
    } catch (err) {
      console.error(
        'If apiQuery tests are successfull you might need to check the const variables of missionLabelStrings because they could be not equal'
      );
      throw err;
    }

    const nextButton = screen.getByTestId('goNext');
    const previousButton = screen.getByTestId('goPrevious');

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(nextButton).toBeDisabled();
    expect(previousButton).not.toBeDisabled();

    fireEvent.click(previousButton);

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(previousButton);
    fireEvent.click(previousButton);
    fireEvent.click(previousButton);

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
});
