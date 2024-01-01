import { Divider, Box } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#fff",
                paddingBottom: "50px",
                marginBottom: 0,
                borderTop: "1px solid '#ddd'",
            }}
        >
            <Divider
                style={{
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#000",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.125)",
                }}
            />
            <p
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#000",
                }}
            >
                Copyright © 2024 ABO ALSHABAB
            </p>
        </Box>
    );
};

export default Footer;
