import { Link } from "react-router-dom";

const logoImageStyles = { width: "60px", height: "60px", marginRight: "1px", cursor: "pointer" }

const Logo = () => {

    return (
        <Link data-testid="to-home-link" to="/" style={ { textDecoration: "none" } }>
            <img
                alt="site-logo"
                src="logo.jpg"
                data-testid="logo-image"
                style={ logoImageStyles }
            />
        </Link>
    );
};

export default Logo;