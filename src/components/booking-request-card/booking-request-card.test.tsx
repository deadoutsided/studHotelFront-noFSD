// BookingRequestCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookingRequestCard from './booking-request-card';
import { usePatchRequestMutation } from '@lib/store/api/eventsApi';

// Define the RequestData type for clarity
type RequestData = {
  id: string;
  roomType: string;
  rooms: number;
  dates: string;
  comment: string;
  invitedPerson: string;
  vistitPurpose: string;
  requestAuthor: string;
  phoneNumber: string;
  email: string;
  requestStatus: boolean;
  personalDataAgree: boolean;
};

// Mock RTK Query hook with proper typing
vi.mock('@lib/store/api/eventsApi', () => ({
  usePatchRequestMutation: () => [
    vi.fn(), // Mock changeStatus function
    {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: undefined,
      error: undefined,
      // Add other properties as needed to match UseMutationStateResult
    } as any, // Use 'as any' temporarily to bypass strict typing; refine if needed
  ],
}));

// Mock CSS module
vi.mock('./style.module.css', () => ({
  default: {
    bookingRequestCardWrapper: 'booking-request-card-wrapper',
    statusWrapper: 'status-wrapper',
    statusCircle: 'status-circle',
    green: 'green',
    red: 'red',
    requestId: 'request-id',
    par: 'par',
    changeProfileBtn: 'change-profile-btn',
  },
}));

describe('BookingRequestCard', () => {
  const mockProps: RequestData = {
    id: '123',
    roomType: 'Single',
    rooms: 2,
    dates: '2025-05-22',
    comment: 'Need extra bed',
    invitedPerson: 'John Doe',
    vistitPurpose: 'Business',
    requestAuthor: 'Jane Smith',
    phoneNumber: '+1234567890',
    email: 'jane@example.com',
    requestStatus: true,
    personalDataAgree: true,
  };

  it('renders all props correctly', () => {
    render(<BookingRequestCard {...mockProps} />);
    
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('Тип размещения: Single')).toBeInTheDocument();
    expect(screen.getByText('Количество комнат: 2')).toBeInTheDocument();
    expect(screen.getByText('Дата: 2025-05-22')).toBeInTheDocument();
    expect(screen.getByText('Комментарий: Need extra bed')).toBeInTheDocument();
    expect(screen.getByText('Приглашённое лицо: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Цель приезда: Business')).toBeInTheDocument();
    expect(screen.getByText('Автор заявки: Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Номер телефона: +1234567890')).toBeInTheDocument();
    expect(screen.getByText('Email: jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Согласие на обработку персональных данных: есть')).toBeInTheDocument();
  });

  it('applies correct classes to elements', () => {
    render(<BookingRequestCard {...mockProps} />);
    
    const wrapper = screen.getByText('123').closest('div')?.parentElement;
    const statusCircle = screen.getByText('123').previousElementSibling;
    
    expect(wrapper).toHaveClass('booking-request-card-wrapper');
    expect(statusCircle).toHaveClass('status-circle', 'green');
    expect(statusCircle).not.toHaveClass('red');
  });

  it('renders red status circle when requestStatus is false', () => {
    render(<BookingRequestCard {...mockProps} requestStatus={false} />);
    
    const statusCircle = screen.getByText('123').previousElementSibling;
    expect(statusCircle).toHaveClass('status-circle', 'red');
    expect(statusCircle).not.toHaveClass('green');
  });

  it('renders correct button text based on requestStatus', () => {
    render(<BookingRequestCard {...mockProps} />);
    expect(screen.getByRole('button', { name: 'Отменить согласование' })).toBeInTheDocument();

    render(<BookingRequestCard {...mockProps} requestStatus={false} />);
    expect(screen.getByRole('button', { name: 'Согласовать' })).toBeInTheDocument();
  });
});