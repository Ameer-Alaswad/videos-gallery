import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


describe('App component', () => {
    it('renders without crashing', () => {
        render(<App />);

        expect(screen.getByTestId('app-bar')).toBeInTheDocument();
        expect(screen.getByTestId('videos-list-main-container')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();

        const toastifyElement = document.querySelector('.Toastify');
        expect(toastifyElement).toBeInTheDocument();
    });
});
