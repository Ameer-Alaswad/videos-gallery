import Typography from "@mui/material/Typography";
import { IconButton, Box, Popover, Divider } from "@mui/material";
import { useState } from "react";
import { ARTIST } from "../../../assets/text";
import ContactUsForm from "./contact-us-form";
import { dividerStyles } from "../../footer/styles";
import {
    contactUsTypographyStyles,
    contactUsContainerStyles,
    contactUsPopoverImageStyles,
    contactUsPopoverContainerStyles,
} from "../styles";

export default function ContactUsPopover() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleOpenContactUsPopover = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseContactUsPopover = () => {
        setAnchorEl(null);
    };

    const isPopoverOpen = Boolean(anchorEl);
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
                data-testid="open-close"
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
                anchorEl={anchorEl}
                onClose={handleCloseContactUsPopover}
                anchorOrigin={anchorOriginVerticalCenterHorizontalBottom}
                transformOrigin={transformOriginVerticalCenterHorizontalTop}
                sx={contactUsPopoverContainerStyles}
            >
                <Typography
                    data-testid="paragraph"
                    sx={contactUsTypographyStyles}
                >
                    {ARTIST}
                </Typography>
                <Divider style={dividerStyles} />
                <ContactUsForm />
            </Popover>
        </Box>
    );
}
