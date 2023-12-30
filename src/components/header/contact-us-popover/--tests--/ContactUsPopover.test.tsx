import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import ContactUsPopover from '..';
import userEvent from '@testing-library/user-event';

test('ContactUsPopover renders correctly', async () => {
  render(<ContactUsPopover />);

  const container = screen.getByTestId('contact-us-popover-container');
  expect(container).toBeInTheDocument();

  userEvent.click(screen.getByTestId('open-close'));

  await waitFor(() => {
    const popoverContent = screen.queryByTestId('paragraph');
    expect(popoverContent).toBeInTheDocument();
  });
});