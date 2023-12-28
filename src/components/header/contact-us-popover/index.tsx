import Typography from "@mui/material/Typography";
import { Button, Box, Popover } from "@mui/material";
import { useState } from "react";

const contactUsPopoverContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
};

export default function ContactUsPopover() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(
        null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Box data-testid="contact-us-popover-container" sx={ contactUsPopoverContainer }>
            <Button aria-describedby={ id } variant="contained" onClick={ handleClick }>
                Contact us
            </Button>
            <Popover
                id={ id }
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                anchorOrigin={ {
                    vertical: "bottom",
                    horizontal: "center",
                } }
                transformOrigin={ {
                    vertical: "top",
                    horizontal: "center",
                } }
            >
                <Typography sx={ { p: 2 } }>The content of the Popover.</Typography>
            </Popover>
        </Box>
    );
}
