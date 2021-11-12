import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import Root from '../pages/Root';

describe('Root Tests', () => {
  it('Renders the app correctly', async () => {
    render(<Root />);
    const missionLabelHeader = await screen.findByText(/MISSION/);
    expect(missionLabelHeader).toBeInTheDocument();
  });

  it('Successfuly navigate to next and previous mission', async () => {
    render(<Root />);

    const missionLabelString1 = 'Sentinel-6 Michael Freilich';
    let missionLabelData = await screen.findByText(missionLabelString1);

    expect(missionLabelData).toBeInTheDocument();
    expect(missionLabelData.innerHTML).toEqual(missionLabelString1);

    const nextButton = screen.getByTitle(/Next mission button/);
    const previousButton = screen.getByTitle(/Previous mission button/);
    fireEvent.click(nextButton);

    const missionLabelString2 = 'Crew-1';

    expect(missionLabelData).toBeInTheDocument();
    expect(missionLabelData.innerHTML).not.toEqual(missionLabelString1);
    expect(missionLabelData.innerHTML).toEqual(missionLabelString2);

    fireEvent.click(previousButton);

    expect(missionLabelData).toBeInTheDocument();
    expect(missionLabelData.innerHTML).not.toEqual(missionLabelString2);
    expect(missionLabelData.innerHTML).toEqual(missionLabelString1);
  });
});
