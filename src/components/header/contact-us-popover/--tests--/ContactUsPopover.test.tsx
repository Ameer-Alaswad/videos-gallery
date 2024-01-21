import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import ContactUsPopover from "..";
import userEvent from "@testing-library/user-event";

test("ContactUsPopover renders correctly", async () => {
    render(<ContactUsPopover />);

    // const popoverContent = screen.queryByTestId("contact-us-form-owner-name");
    // expect(popoverContent).toBeInTheDocument();

    const container = screen.getByTestId("contact-us-popover-container");
    expect(container).toBeInTheDocument();

    userEvent.click(screen.getByTestId("open-close-contact-us-popover"));

    await waitFor(() => {
        const popoverContent = screen.queryByTestId(
            "contact-us-form-owner-name"
        );
        expect(popoverContent).toBeInTheDocument();
    });
});
