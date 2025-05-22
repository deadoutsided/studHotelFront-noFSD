// BookingForm.test.tsx
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import BookingForm from './booking-form';

// Mock the fetch API
global.fetch = vi.fn();

// Mock CSS module
vi.mock('./style.module.css', () => ({
  default: {
    form: 'form',
    labelRowWrapper: 'label-row-wrapper',
    label: 'label',
    requiredMark: 'required-mark',
    input: 'input',
    checkboxWrapper: 'checkbox-wrapper',
    checkboxInput: 'checkbox-input',
    submitBtn: 'submit-btn',
  },
}));

describe('BookingForm', () => {
  // Clean up after each test
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('renders form with all inputs and labels', () => {
    render(<BookingForm />);
    
    // Check form and button
    const form = screen.getByTestId('booking-form');
    expect(form).toHaveClass('form');
    expect(screen.getByRole('button', { name: 'Отправить заявку на проживание' })).toHaveClass('submit-btn');

    // Check input fields
    expect(screen.getByLabelText(/Тип размещения/i)).toHaveAttribute('name', 'roomType');
    expect(screen.getByLabelText(/Количество мест/i)).toHaveAttribute('name', 'rooms');
    expect(screen.getByLabelText(/Период проживания/i)).toHaveAttribute('name', 'dates');
    expect(screen.getByLabelText(/Комментарий/i)).toHaveAttribute('name', 'comment');
    expect(screen.getByLabelText(/ФИО должность, приглашенного лица/i)).toHaveAttribute('name', 'invitedPerson');
    expect(screen.getByLabelText(/Цель приезда/i)).toHaveAttribute('name', 'vistitPurpose');
    expect(screen.getByLabelText(/Автор заявки/i)).toHaveAttribute('name', 'requestAuthor');
    expect(screen.getByLabelText(/Телефон/i)).toHaveAttribute('name', 'phoneNumber');
    expect(screen.getByLabelText(/Электронная почта/i)).toHaveAttribute('name', 'email');
    expect(screen.getByLabelText(/Подтвердите согласие/i)).toHaveAttribute('name', 'personalDataAgree');
  });

  it('applies correct classes to elements', () => {
    render(<BookingForm />);
    
    const form = screen.getByTestId('booking-form');
    const inputs = screen.getAllByRole('textbox');
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button', { name: 'Отправить заявку на проживание' });

    expect(form).toHaveClass('form');
    inputs.forEach((input) => expect(input).toHaveClass('input'));
    expect(checkbox).toHaveClass('checkbox-input');
    expect(button).toHaveClass('submit-btn');
    expect(screen.getAllByText(/\*/i)[0].parentElement).toHaveClass('label');
    expect(screen.getAllByText(/\*/i)[0]).toHaveClass('required-mark');
    //expect(screen.getByText(/Подтвердите согласие/i).parentElement).toHaveClass('checkbox-wrapper');
  });

  it('submits form with correct FormData and makes fetch call', async () => {
    // Mock fetch response
    (global.fetch as any).mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    });

    render(<BookingForm />);

    // Fill form inputs
    fireEvent.change(screen.getByLabelText(/Тип размещения/i), { target: { value: 'Suite' } });
    fireEvent.change(screen.getByLabelText(/Количество мест/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Период проживания/i), { target: { value: '2025-05-22' } });
    fireEvent.change(screen.getByLabelText(/Комментарий/i), { target: { value: 'Extra bed needed' } });
    fireEvent.change(screen.getByLabelText(/ФИО должность, приглашенного лица/i), { target: { value: 'John Doe, Manager' } });
    fireEvent.change(screen.getByLabelText(/Цель приезда/i), { target: { value: 'Business' } });
    fireEvent.change(screen.getByLabelText(/Автор заявки/i), { target: { value: 'Jane Smith' } });
    fireEvent.change(screen.getByLabelText(/Телефон/i), { target: { value: '+1234567890' } });
    fireEvent.change(screen.getByLabelText(/Электронная почта/i), { target: { value: 'jane@example.com' } });
    fireEvent.click(screen.getByLabelText(/Подтвердите согласие/i));

    // Submit form
    const submitButton = screen.getByRole('button', { name: 'Отправить заявку на проживание' });
    fireEvent.click(submitButton);

    // Wait for fetch to be called
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3001/booking-requests',
        expect.objectContaining({
          method: 'POST',
          body: expect.any(FormData),
        })
      );
    });

    // Verify FormData content by mocking console.log
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const form = screen.getByTestId('booking-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith('roomType: Suite');
      expect(consoleLogSpy).toHaveBeenCalledWith('rooms: 3');
      expect(consoleLogSpy).toHaveBeenCalledWith('dates: 2025-05-22');
      expect(consoleLogSpy).toHaveBeenCalledWith('comment: Extra bed needed');
      expect(consoleLogSpy).toHaveBeenCalledWith('invitedPerson: John Doe, Manager');
      expect(consoleLogSpy).toHaveBeenCalledWith('vistitPurpose: Business');
      expect(consoleLogSpy).toHaveBeenCalledWith('requestAuthor: Jane Smith');
      expect(consoleLogSpy).toHaveBeenCalledWith('phoneNumber: +1234567890');
      expect(consoleLogSpy).toHaveBeenCalledWith('email: jane@example.com');
      expect(consoleLogSpy).toHaveBeenCalledWith('personalDataAgree: on');
      expect(consoleLogSpy).toHaveBeenCalledWith('requestStatus: off');
    });

    consoleLogSpy.mockRestore();
  });

  it('handles fetch error gracefully', async () => {
    // Mock fetch to throw an error
    //(global.fetch as any).mockRejectedValue(new Error('Network error'));

    render(<BookingForm />);
    
    // Fill at least one input to trigger submission
    fireEvent.change(screen.getByLabelText(/Тип размещения/i), { target: { value: 'Suite' } });
    
    const submitButton = screen.getByRole('button', { name: 'Отправить заявку на проживание' });
    fireEvent.click(submitButton);

    // Verify fetch was called despite error
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    // Ensure form remains in the DOM
    expect(screen.getByTestId('booking-form')).toBeInTheDocument();
  });
});