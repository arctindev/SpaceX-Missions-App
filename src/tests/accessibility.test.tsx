import React from 'react';
import { render, screen, fireEvent, userEvent } from '../test-utils';
import Root from '../pages/Root';
import { queryParams } from '../api/query';

describe('Root Tests', () => {
  it('Checks if all images have alternative text', async () => {
    render(<Root />);

    const nextButton = screen.getByTestId('goNext');

    const missionLabelHeader = await screen.findByText(/MISSION/);
    expect(missionLabelHeader).toBeInTheDocument();

    let arrayOfImages;

    for (let i = 1; i < queryParams.queryLimit; i++) {
      arrayOfImages = screen.queryAllByRole('img');

      arrayOfImages.length > 0 &&
        arrayOfImages.map((image) => {
          expect(image).toHaveAttribute('alt');
        });

      fireEvent.click(nextButton);
    }
  });

  // =========================================================================

  it('Correctly focusing by using tab key when previous mission button is disabled', async () => {
    render(
      <div data-testid="testroot">
        <Root />
      </div>
    );

    const nextButton = screen.getByTestId('goNext');

    const missionLabelHeader = await screen.findByText(/MISSION/);
    expect(missionLabelHeader).toBeInTheDocument();

    const rootContainer = screen.getByTestId('testroot');
    expect(rootContainer).toBeInTheDocument();

    rootContainer.focus();
    userEvent.tab();

    expect(nextButton).toHaveFocus();

    const ArticleLinkButton = screen.getByText(/LEARN MORE/);

    userEvent.tab();

    expect(ArticleLinkButton).toHaveFocus();
  });

  // ==========================================================================

  it('Correctly focusing by using tab key when previous mission button is enabled', async () => {
    render(
      <div data-testid="testroot">
        <Root />
      </div>
    );

    const nextButton = screen.getByTestId('goNext');
    const previousButton = screen.getByTestId('goPrevious');

    const missionLabelHeader = await screen.findByText(/MISSION/);
    expect(missionLabelHeader).toBeInTheDocument();

    fireEvent.click(nextButton);

    const rootContainer = screen.getByTestId('testroot');
    expect(rootContainer).toBeInTheDocument();

    rootContainer.focus();
    userEvent.tab();

    expect(previousButton).toHaveFocus();

    userEvent.tab();

    expect(nextButton).toHaveFocus();

    const ArticleLinkButton = screen.getByText(/LEARN MORE/);

    userEvent.tab();

    expect(ArticleLinkButton).toHaveFocus();
  });
});
