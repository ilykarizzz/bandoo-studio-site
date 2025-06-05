import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactSection } from '../ContactSection';

describe('ContactSection', () => {
  it('renders contact form', () => {
    render(<ContactSection />);
    
    expect(screen.getByLabelText(/imię lub nazwa zespołu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/adres email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/opis projektu/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const mockFetch = jest.fn(() => 
      Promise.resolve({ ok: true, json: () => Promise.resolve({ message: 'success' }) })
    );
    global.fetch = mockFetch;

    render(<ContactSection />);

    fireEvent.change(screen.getByLabelText(/imię lub nazwa zespołu/i), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText(/adres email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/opis projektu/i), {
      target: { value: 'Test message' },
    });

    fireEvent.click(screen.getByText(/wyślij zapytanie/i));

    await waitFor(() => {
      expect(screen.getByText(/wiadomość została wysłana/i)).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledWith('/api/contact', expect.any(Object));
  });
});