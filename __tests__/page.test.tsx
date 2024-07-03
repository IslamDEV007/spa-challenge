import { render, screen, fireEvent} from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

jest.mock('../src/components/PrefectureCheckboxes/PrefectureCheckboxes.tsx', () => {
  return {
    __esModule: true,
    default: ({onPrefectureSelect}: any) => (
      <div>
        <button onClick={() => onPrefectureSelect(1)}> Select Prefecture</button>
      </div>
    ),
  };
});

jest.mock('../src/components/PopulationChart/PopulationChart.tsx', () => {
  return {
    __esModule: true,
    default: ({prefCode}: any) => (
      <div>Population Chart for Prefecture {prefCode}</div>
    ),
  };
});

describe('Home', () => {
  it('renders title and handles state changes', () => {
    render(<Home/>);

    expect(screen.getByText('都道府県別の総人口推移')).toBeInTheDocument();
    expect(screen.queryByText('Population Chart for Prefecture 1')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Select Prefecture'));

    expect(screen.getByText('Population Chart for Prefecture 1')).toBeInTheDocument();
  });
});
