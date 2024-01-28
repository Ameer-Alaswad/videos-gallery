import { useRef, FormEvent } from "react";
import { Box, Button, InputLabel } from "@mui/material";
import { MESSAGE, SEND } from "../../../../assets/text";
import {
    contactUsPopoverButtonStyles,
    contactUsPopoverFormStyles,
    contactUsPopoverMainContainerStyles,
    contactUsFormContainerStyles,
} from "../../styles";
import { TextareaAutosize } from "@mui/material";
import { sendEmail } from "../../../../utils/utils.tsx";
import { styled } from "@mui/system";
const StyledTextarea = styled(TextareaAutosize)(() => ({
    width: "80%",
    borderRadius: "8px",
    color: "black",
    padding: "25px",
    resize: "none",
}));

const ContactUsForm = () => {
    const contactUsFormRef = useRef<HTMLFormElement>(null);

    const sendEmailHandler = (event: FormEvent) => {
        event.preventDefault();
        const contactUsFormElement = contactUsFormRef.current;
        if (contactUsFormElement) {
            sendEmail(contactUsFormElement);
        }
    };

    return (
        <Box
            sx={contactUsPopoverMainContainerStyles}
            data-testid="contact-us-form-main-box"
        >
            <Box
                data-testid="contact-us-form"
                ref={contactUsFormRef}
                onSubmit={sendEmailHandler}
                component="form"
                sx={contactUsFormContainerStyles}
            >
                <InputLabel
                    data-testid="contact-us-form-text-area-label"
                    htmlFor="contactUsMessage"
                    sx={contactUsPopoverFormStyles}
                >
                    {MESSAGE}
                </InputLabel>
                <StyledTextarea
                    data-testid="contact-us-form-text-area"
                    id="contactUsMessage"
                    name="contactUsMessage"
                    minRows={3}
                    required
                />
                <Button
                    data-testid="contact-us-form-submit-button"
                    type="submit"
                    variant="text"
                    color="inherit"
                    sx={contactUsPopoverButtonStyles}
                >
                    {SEND}
                </Button>
            </Box>
        </Box>
    );
};
export default ContactUsForm;
