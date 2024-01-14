import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "..";

describe("Header component", () => {
    render(<Header />);

    it("should render the AppBar component", () => {
        const appBar = screen.getByTestId("app-bar");
        expect(appBar).toBeInTheDocument();

        const headerContentContainer = screen.getByTestId(
            "header-content-container"
        );
        expect(headerContentContainer).toBeInTheDocument();

        const logo = screen.getByTestId("logo-image");
        expect(logo).toBeInTheDocument();

        const contactUsPopover = screen.getByTestId(
            "contact-us-popover-container"
        );
        expect(contactUsPopover).toBeInTheDocument();

        const toInstagramLink = screen.getByTestId("to-instagram-link");
        expect(toInstagramLink).toBeInTheDocument();
    });
});
