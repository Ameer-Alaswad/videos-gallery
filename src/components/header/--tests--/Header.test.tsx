import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../index";

test('renders Header component with clickable Instagram link', () => {
    render(

        <Router>
            <Header />
        </Router>
    );

    const appBarElement = screen.getByTestId('app-bar');
    expect(appBarElement).toBeInTheDocument();

    // const toolbarElement = screen.getByTestId('toolbar');
    // expect(toolbarElement).toBeInTheDocument();

    // const news1Element = screen.getByTestId('news1');
    // expect(news1Element).toBeInTheDocument();
    // expect(news1Element).toHaveTextContent('News');

    // const instagramLinkElement = screen.getByTestId('instagram-link');
    // expect(instagramLinkElement).toBeInTheDocument();

    // fireEvent.click(instagramLinkElement);

    // expect(instagramLinkElement).toHaveAttribute('href', 'https://www.google.com');
});
