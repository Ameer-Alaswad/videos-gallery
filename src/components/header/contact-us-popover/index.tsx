import Typography from "@mui/material/Typography";
import { IconButton, Box, Popover, Divider } from "@mui/material";
import { useState } from "react";
import { CONTACT_US_FORM_OWNER_NAME } from "../../../assets/text";
import ContactUsForm from "./contact-us-form";
import { dividerStyles } from "../../footer/styles";
import {
    contactUsTypographyStyles,
    contactUsContainerStyles,
    contactUsPopoverImageStyles,
    contactUsPopoverContainerStyles,
} from "../styles";

interface contactUsPopoverProps {
    openContactUSPopoverButton: HTMLButtonElement | null;
    setOpenContactUSPopoverButton: (element: HTMLButtonElement | null) => void;
}

const ContactUsPopover = ({
    openContactUSPopoverButton,
    setOpenContactUSPopoverButton,
}: contactUsPopoverProps) => {
    const handleOpenContactUsPopover = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setOpenContactUSPopoverButton(event.currentTarget);
    };

    const handleCloseContactUsPopover = () => {
        setOpenContactUSPopoverButton(null);
    };

    const isPopoverOpen = Boolean(openContactUSPopoverButton);
    const contactUsPopoverId = isPopoverOpen ? "simple-popover" : undefined;

    const anchorOriginVerticalCenterHorizontalBottom = {
        vertical: "bottom" as const,
        horizontal: "center" as const,
    };

    const transformOriginVerticalCenterHorizontalTop = {
        vertical: "top" as const,
        horizontal: "center" as const,
    };

    return (
        <Box
            data-testid="contact-us-popover-container"
            sx={contactUsContainerStyles}
        >
            <IconButton
                data-testid="open-close-contact-us-popover"
                aria-describedby={contactUsPopoverId}
                onClick={handleOpenContactUsPopover}
                color="inherit"
                size="large"
                sx={{ marginTop: "60px" }}
            >
                <img
                    src="1918043-200.png"
                    alt="Open contact us popover icon"
                    style={contactUsPopoverImageStyles}
                />
            </IconButton>
            <Popover
                id={contactUsPopoverId}
                open={isPopoverOpen}
                anchorEl={openContactUSPopoverButton}
                onClose={handleCloseContactUsPopover}
                anchorOrigin={anchorOriginVerticalCenterHorizontalBottom}
                transformOrigin={transformOriginVerticalCenterHorizontalTop}
                sx={contactUsPopoverContainerStyles}
            >
                <Typography
                    data-testid="contact-us-form-owner-name"
                    sx={contactUsTypographyStyles}
                >
                    {CONTACT_US_FORM_OWNER_NAME}
                </Typography>
                <Divider sx={dividerStyles} />
                <ContactUsForm />
            </Popover>
        </Box>
    );
};

export default ContactUsPopover;
