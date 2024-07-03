import { render, screen, fireEvent } from '@testing-library/react';
import RenderPrefectures from '@/components/PrefectureCheckboxes/renderPrefectures';
import '@testing-library/jest-dom';

const mockPrefectures = [
  { prefCode: 1, prefName: 'Tokyo' },
  { prefCode: 2, prefName: 'Osaka' },
];

describe('RenderPrefectures', () => {
  it('renders checkboxes and handles changes', () => {
    const handleCheckboxChange = jest.fn();
    render(
      <RenderPrefectures
        prefectures={mockPrefectures}
        handleCheckboxChange={handleCheckboxChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Tokyo'));
    fireEvent.click(screen.getByLabelText('Osaka'));

    expect(handleCheckboxChange).toHaveBeenCalledWith(1);
    expect(handleCheckboxChange).toHaveBeenCalledWith(2);
  });
});
