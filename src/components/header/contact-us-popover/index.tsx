import Typography from "@mui/material/Typography";
import { IconButton, Box, Popover, Divider } from "@mui/material";
import { useState } from "react";
import { ARTIST } from "../../../assets/text";
import ContactUsForm from "./contact-us-form";
import { dividerStyles } from "../../footer/styles";
import {
    popoverTextStyles,
    contactUsPopoverContainerStyle,
    contactUsPopoverImageStyles,
} from "../styles";

export default function ContactUsPopover() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Box
            data-testid="contact-us-popover-container"
            sx={contactUsPopoverContainerStyle}
        >
            <IconButton
                data-testid="open-close"
                aria-describedby={id}
                onClick={handleClick}
                color="inherit"
                size="large"
                sx={{ marginTop: "60px" }}
            >
                <img
                    src="1918043-200.png"
                    alt="Custom Icon"
                    style={contactUsPopoverImageStyles}
                />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                sx={{ zIndex: "unset" }}
            >
                <Typography data-testid="paragraph" sx={popoverTextStyles}>
                    {ARTIST}
                </Typography>
                <Divider style={dividerStyles} />
                <ContactUsForm />
            </Popover>
        </Box>
    );
}
