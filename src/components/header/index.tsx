import { AppBar, Box } from "@mui/material";
import ContactUsPopover from "./contact-us-popover";
import ToInstagramLink from "./to-instagram-link";
import Logo from "./logo";
import { headerContainerStyles, headerContentContainerStyles } from "./styles";
import { useState } from "react";

const Header = () => {
    const [contactUsPopoverAnchorEl, setContactUsPopoverAnchorEl] =
        useState<HTMLButtonElement | null>(null);

    return (
        <AppBar
            data-testid="app-bar"
            sx={
                contactUsPopoverAnchorEl
                    ? { ...headerContainerStyles, width: "100vw" }
                    : headerContainerStyles
            }
            position="static"
        >
            <Box
                data-testid="header-content-container"
                sx={headerContentContainerStyles}
            >
                <Logo />
                <ContactUsPopover
                    contactUsPopoverAnchorEl={contactUsPopoverAnchorEl}
                    setContactUsPopoverAnchorEl={setContactUsPopoverAnchorEl}
                />
                <ToInstagramLink />
            </Box>
        </AppBar>
    );
};

export default Header;
