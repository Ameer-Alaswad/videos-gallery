import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const toInstagramStyles = { fontSize: 60, marginLeft: 1 };

const ToInstagramLink = () => {
    return (
        <>
            <InstagramIcon data-testid="to-instagram-icon" sx={ toInstagramStyles } />
            <Link
                data-testid="to-instagram-link"
                href="https://www.google.com"
                color="inherit"
                underline="none"
                target="_blank"
            ></Link>
        </>
    );
};

export default ToInstagramLink;
