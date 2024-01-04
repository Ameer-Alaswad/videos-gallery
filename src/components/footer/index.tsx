import { Divider, Box, Typography } from "@mui/material";
import { footerMainBoxStyle, dividerStyle, textStyle } from "./style";
import { COPY_RIGHT } from "../../assets/text";

const Footer: React.FC = () => {
    return (
        <Box sx={footerMainBoxStyle}>
            <Divider style={dividerStyle} />
            <Typography sx={textStyle}>{COPY_RIGHT}</Typography>
        </Box>
    );
};

export default Footer;
