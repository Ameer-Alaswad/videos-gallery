import Typography from "@mui/material/Typography";
import { IconButton, Box, Popover, Divider } from "@mui/material";
import { CONTACT_US_FORM_OWNER_NAME } from "../../../assets/text";
import ContactUsForm from "./contact-us-form";
import { dividerStyles } from "../../footer/styles";
import {
    contactUsTypographyStyles,
    contactUsContainerStyles,
    contactUsPopoverImageStyles,
    contactUsPopoverContainerStyles,
} from "../styles";
import { useState } from "react";
import {
    anchorOriginVerticalCenterHorizontalBottom,
    transformOriginVerticalCenterHorizontalTop,
} from "../../../assets/constants.tsx";

const ContactUsPopover = () => {
    const [openContactUSPopoverButton, setOpenContactUSPopoverButton] =
        useState<HTMLButtonElement | null>(null);

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleOpenContactUsPopover = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setOpenContactUSPopoverButton(event.currentTarget);
        setIsPopoverOpen(!isPopoverOpen);
    };

    const handleCloseContactUsPopover = () => {
        setOpenContactUSPopoverButton(null);
        setIsPopoverOpen(false);
    };

    const contactUsPopoverId = isPopoverOpen ? "simple-popover" : undefined;

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
                disableScrollLock
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
