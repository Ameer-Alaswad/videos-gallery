import { Divider, Box, Typography } from "@mui/material";
import { footerMainBoxStyle, dividerStyle, textStyle } from "./style";

const Footer: React.FC = () => {
    return (
        <Box sx={footerMainBoxStyle}>
            <Divider style={dividerStyle} />
            <Typography sx={textStyle}>
                Copyright © 2024 ABO ALSHABAB
            </Typography>
        </Box>
    );
};

export default Footer;
