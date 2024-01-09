import { AppBar, Box } from "@mui/material";
import ContactUsPopover from "./contact-us-popover";
import ToInstagramLink from "./to-instagram-link";
import Logo from "./logo";
import { headerContainerStyles, headerContentContainerStyles } from "./styles";

const Header = () => {
    return (
        <AppBar
            data-testid="app-bar"
            sx={headerContainerStyles}
            position="static"
        >
            <Box
                data-testid="header-content-container"
                sx={headerContentContainerStyles}
            >
                <Logo />
                <ContactUsPopover />
                <ToInstagramLink />
            </Box>
        </AppBar>
    );
};

export default Header;
