// CustomSelect.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import CustomSelect from './custom-select';

// Мокируем CSS-модуль
vi.mock('./style.module.css', () => ({
  default: {
    сustomSelect: 'custom-select',
    customSelectOption: 'custom-select-option',
  },
}));

describe('CustomSelect', () => {
  const mockList = [
    { title: 'Moscow', value: 'msc' },
    { title: 'Arkhangelsk', value: 'arh' },
    { title: 'Sochi', value: 'soc' },
  ];

  it('renders select element with correct class', () => {
    render(<CustomSelect list={mockList} selectName="city" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('custom-select');
    expect(selectElement).toHaveAttribute('name', 'city');
  });

  it('renders correct number of options', () => {
    render(<CustomSelect list={mockList} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(mockList.length);
  });

  it('renders options with correct titles and values', () => {
    render(<CustomSelect list={mockList} />);
    const options = screen.getAllByRole('option');

    options.forEach((option, index) => {
      expect(option).toHaveTextContent(mockList[index].title);
      expect(option).toHaveValue(mockList[index].value);
      expect(option).toHaveClass('custom-select-option');
    });
  });

  it('sets disabled attribute correctly based on value', () => {
    render(<CustomSelect list={mockList} />);
    const options = screen.getAllByRole('option');

    expect(options[0]).toHaveAttribute('disabled'); // Moscow (msc)
    expect(options[1]).not.toHaveAttribute('disabled'); // Arkhangelsk (arh)
    expect(options[2]).toHaveAttribute('disabled'); // Sochi (soc)
  });

  it('renders with empty list without errors', () => {
    render(<CustomSelect list={[]} />);
    const selectElement = screen.getByRole('combobox');
    const options = screen.queryAllByRole('option');
    expect(selectElement).toBeInTheDocument();
    expect(options).toHaveLength(0);
  });

  it('renders without selectName prop', () => {
    render(<CustomSelect list={mockList} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).not.toHaveAttribute('name');
  });
});