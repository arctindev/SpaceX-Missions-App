import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../test-utils';
import { DataLabel } from '../components/DataLabel/DataLabel';

describe('DataLabel test cases', () => {
  it('Renders the component correctly', () => {
    renderWithTheme(<DataLabel headingText="Test Heading" type="mission_label" />);
    const missionLabelHeader = screen.getByText(/Test Heading/);
    expect(missionLabelHeader).toBeInTheDocument();
  });

  // =========================================================================

  it('Renders data label with data correctly', () => {
    renderWithTheme(
      <DataLabel headingText="Test Heading" type="mission_label" data="This is test data" />
    );
    const missionLabelHeader = screen.getByText(/Test Heading/);
    expect(missionLabelHeader).toBeInTheDocument();
    const missionLabelData = screen.getByText(/This is test data/);
    expect(missionLabelData).toBeInTheDocument();
  });

  // =========================================================================

  it('Renders recovered component correctly with true value', () => {
    renderWithTheme(
      <DataLabel
        headingText="Test Heading"
        type="mission_label"
        data="This is test data"
        hasRecoveredComponent={{ data: true }}
      />
    );
    const missionLabelHeader = screen.getByText(/Test Heading/);
    expect(missionLabelHeader).toBeInTheDocument();

    const missionLabelData = screen.getByText(/This is test data/);
    expect(missionLabelData).toBeInTheDocument();

    const wasRecovered = screen.getByText(/RECOVERED/);
    expect(wasRecovered).toBeInTheDocument();
  });

  // ==========================================================================

  it('Renders recovered component correctly with false value', () => {
    renderWithTheme(
      <DataLabel
        headingText="Test Heading"
        type="mission_label"
        data="This is test data"
        hasRecoveredComponent={{ data: false }}
      />
    );
    const missionLabelHeader = screen.getByText(/Test Heading/);
    expect(missionLabelHeader).toBeInTheDocument();

    const missionLabelData = screen.getByText(/This is test data/);
    expect(missionLabelData).toBeInTheDocument();

    const wasRecovered = screen.getByText(/UNRECOVERED/);
    expect(wasRecovered).toBeInTheDocument();
  });

  // ===========================================================================

  it('Successfult shows longer data component', () => {
    renderWithTheme(
      <DataLabel
        headingText="Test Heading"
        type="launch_site"
        data="This is test data"
        longerData="This is test longer data, should be visible on mouseover"
      />
    );
    const missionLabelHeader = screen.getByText(/Test Heading/);
    expect(missionLabelHeader).toBeInTheDocument();

    const missionLabelData = screen.getByText(/This is test data/);
    expect(missionLabelData).toBeInTheDocument();

    expect(() =>
      screen.getByText(/This is test longer data, should be visible on mouseover/)
    ).toThrow();

    fireEvent.mouseOver(missionLabelData);

    const longerDataComponent = screen.getByText(
      /This is test longer data, should be visible on mouseover/
    );

    expect(longerDataComponent).toBeInTheDocument();
  });
});
