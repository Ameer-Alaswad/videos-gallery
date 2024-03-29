import { Divider, Box, Typography } from "@mui/material";
import { footerMainBoxStyles, dividerStyles, textStyles } from "./styles";
import { COPY_RIGHT } from "../../assets/text";

const Footer: React.FC = () => {
    return (
        <Box data-testid="footer" sx={ footerMainBoxStyles }>
            <Divider data-testid="footer-divider" style={ dividerStyles } />
            <Typography data-testid="copy-right" sx={ textStyles }>{ COPY_RIGHT }</Typography>
        </Box>
    );
};

export default Footer;
