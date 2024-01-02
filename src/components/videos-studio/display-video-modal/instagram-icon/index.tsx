import { InstagramStyles, linkToInstagramStyle } from "../../style";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

interface InstagramLinkProps {
    instagramLink: string;
}

const InstagramLink = ({ instagramLink }: InstagramLinkProps) => {
    return (
        <Link
            aria-label="Visit our Instagram page"
            data-testid="to-instagram-link"
            href={instagramLink}
            color="inherit"
            underline="none"
            target="_blank"
            sx={linkToInstagramStyle}
        >
            <InstagramIcon
                data-testid="to-instagram-icon"
                sx={InstagramStyles}
            />
        </Link>
    );
};

export default InstagramLink;
