import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const toInstagramStyles = { fontSize: 60, marginLeft: 1 };

const ToInstagramLink = () => {
    return (
        <>

            <Link
                aria-label="Visit our Instagram page"
                data-testid="to-instagram-link"
                href="https://www.google.com"
                color="inherit"
                underline="none"
                target="_blank"
            >
                <InstagramIcon data-testid="to-instagram-icon" sx={ toInstagramStyles } />
            </Link>
        </>
    );
};

export default ToInstagramLink;
