
const logoImageStyles = { width: "60px", height: "60px", marginRight: "1px", cursor: "pointer" }

const Logo = () => {

    return (
        <img
            alt="site-logo"
            src="logo.jpg"
            data-testid="logo-image"
            style={ logoImageStyles }
        />
    );
};

export default Logo;