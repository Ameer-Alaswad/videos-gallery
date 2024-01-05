import Typography from "@mui/material/Typography";
import { IconButton, Box, Popover } from "@mui/material";
import { useState } from "react";
import { CREATED_BY } from "../../../assets/text";
import ContactUsForm from "./contact-us-form";

const contactUsPopoverContainerStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
};
const contactUsPopoverImageStyles = {
    width: "30px",
    height: "30px",
    transform: "rotate(90deg)",
};

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
                <Typography
                    data-testid="paragraph"
                    sx={{ p: 2, textAlign: "center" }}
                >
                    {CREATED_BY}
                </Typography>
                <ContactUsForm />
            </Popover>
        </Box>
    );
}
