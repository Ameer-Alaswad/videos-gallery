import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ToInstagramLink from "../index";

const toInstagramStyles = { fontSize: 60, marginLeft: 1 };

describe("ToInstagramLink Component Rendering", () => {
    test("renders the Instagram link with correct icon, attributes, and styles", () => {
        render(<ToInstagramLink />);

        const InstagramIcon = screen.getByTestId("to-instagram-icon");
        expect(InstagramIcon).toBeInTheDocument();

        const instagramLink = screen.getByTestId("to-instagram-link");
        expect(instagramLink).toBeInTheDocument();

        expect(instagramLink).toHaveAttribute("href", "https://www.google.com");
        expect(instagramLink).toHaveStyle(toInstagramStyles);
        expect(instagramLink).toHaveAttribute(
            "aria-label",
            "Visit our Instagram page"
        );
    });
});
