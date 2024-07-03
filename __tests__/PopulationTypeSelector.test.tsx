import { render, screen, fireEvent } from '@testing-library/react';
import PopulationTypeSelector from '@/components/PopulationChart/PopulationTypeSelector';
import '@testing-library/jest-dom';

describe('PopulationTypeSelector', () => {
  it('renders buttons and handles clicks', () => {
    const handleTypeChange = jest.fn();
    render(<PopulationTypeSelector onTypeChange={handleTypeChange} />);

    fireEvent.click(screen.getByText('総人口'));
    fireEvent.click(screen.getByText('年少人口'));

    expect(handleTypeChange).toHaveBeenCalledWith('総人口');
    expect(handleTypeChange).toHaveBeenCalledWith('年少人口');
  });
});
