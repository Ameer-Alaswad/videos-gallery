import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '..';


describe('Footer component', () => {
    it('Footer renders correctly', () => {
        render(<Footer />)

        expect(screen.getByTestId('footer')).toBeInTheDocument();
        expect(screen.getByTestId('footer-divider')).toBeInTheDocument();
        expect(screen.getByTestId('copy-right')).toBeInTheDocument();
    });
});
