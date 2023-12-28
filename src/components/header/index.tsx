import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactUsPopover from "./contact-us-popover";

const headerContainerStyles = { backgroundColor: "white", color: "black" };

const Header = () => {
    return (
        <AppBar data-testid="app-bar" sx={ headerContainerStyles } position="static">
            <Toolbar data-testid="toolbar">
                <Typography
                    data-testid="news1"
                    variant="h6"
                    component="div"
                    sx={ { flexGrow: 1 } }
                >
                    News
                </Typography>
                <ContactUsPopover />
                <Link
                    data-testid="instagram-link"
                    href="https://www.google.com"
                    color="inherit"
                    underline="none"
                    target="_blank"
                >
                    <InstagramIcon />
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
