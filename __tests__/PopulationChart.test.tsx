import { render, screen, waitFor } from '@testing-library/react';
import PopulationChart from '@/components/PopulationChart/PopulationChart'; 
import '@testing-library/jest-dom';
import { fetchPopulationComposition } from '@/utils/api';

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts')
  return {
      ...OriginalModule,
      ResponsiveContainer: ({ children }: any) => (
          <OriginalModule.ResponsiveContainer width={800} height={800}>
              {children}
          </OriginalModule.ResponsiveContainer>
      ),
  }
})

jest.mock('../src/utils/api.ts', () => ({
  fetchPopulationComposition: jest.fn(),
}));

const mockData = {
  data: [
    {
      label: '総人口',
      data: [
        { year: 2000, value: 100 },
        { year: 2010, value: 150 },
      ],
    },
  ],
};

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('PopulationChart', () => {
  it('renders chart with data', async () => {
    (fetchPopulationComposition as jest.Mock).mockResolvedValue(mockData);

    render(<PopulationChart prefCode={1} />);

    await waitFor(() => expect(fetchPopulationComposition).toHaveBeenCalledWith(1));

    // Check for SVG elements that indicate the chart is rendered
    await waitFor(() => {
      const svgElements = document.querySelectorAll('svg');
      expect(svgElements.length).toBeGreaterThan(0);
    });

    // Check for specific chart content
    await waitFor(() => {
      expect(screen.getByText('2000')).toBeInTheDocument();
      expect(screen.getByText('2010')).toBeInTheDocument();
    });
  });
});