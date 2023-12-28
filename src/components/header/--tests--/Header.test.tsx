import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from "../index";

test('renders Header component with clickable Instagram link', () => {
    render(<Header />);

    const appBarElement = screen.getByTestId('app-bar');
    expect(appBarElement).toBeInTheDocument();

    const toolbarElement = screen.getByTestId('toolbar');
    expect(toolbarElement).toBeInTheDocument();

    const news1Element = screen.getByTestId('news1');
    expect(news1Element).toBeInTheDocument();
    expect(news1Element).toHaveTextContent('News');

    const instagramLinkElement = screen.getByTestId('instagram-link');
    expect(instagramLinkElement).toBeInTheDocument();

    fireEvent.click(instagramLinkElement);

    expect(instagramLinkElement).toHaveAttribute('href', 'https://www.google.com');
});
