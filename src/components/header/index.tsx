import { AppBar, Box } from "@mui/material";
import ContactUsPopover from "./contact-us-popover";
import ToInstagramLink from "./to-instagram-link";
import Logo from "./logo";

const headerContainerStyles = {
    backgroundColor: "white",
    color: "black",
    height: "90px",
    width: "100vw",
    position: "relative",
    zIndex: "10",
};

const headerContentContainerStyles = {
    display: "flex",
    justifyContent: "center",
    width: "300px",
    alignItems: "center",
    margin: "0 auto",
    height: "100%",
};

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
