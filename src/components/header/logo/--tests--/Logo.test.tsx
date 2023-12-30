import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Logo from "../index";

const logoImageStyles = {
    width: "60px",
    height: "60px",
    marginRight: "1px",
    cursor: "pointer",
};

describe("Logo Component Rendering", () => {
    test("renders the logo image with correct attributes and styles", () => {
        render(
            <Router>
                <Logo />
            </Router>
        );

        const toHomeLink = screen.getByTestId("to-home-link");
        expect(toHomeLink).toBeInTheDocument();
        expect(toHomeLink).toHaveAttribute("href", "/");
        expect(toHomeLink).toHaveStyle("textDecoration: none");

        const logoImage = screen.getByTestId("logo-image");
        expect(logoImage).toBeInTheDocument();

        expect(logoImage).toHaveAttribute("src", "logo.jpg");
        expect(logoImage).toHaveAttribute("alt", "site-logo");
        expect(logoImage).toHaveStyle(logoImageStyles);
    });
});
