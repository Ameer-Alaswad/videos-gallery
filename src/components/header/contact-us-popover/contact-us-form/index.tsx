import { useRef, FormEvent } from "react";
import { Box, Button, InputLabel } from "@mui/material";
import { MESSAGE, SEND } from "../../../../assets/text";
import {
    contactUsPopoverButtonStyles,
    contactUsPopoverTextAreaStyles,
    contactUsPopoverFormStyles,
    contactUsPopoverMainContainerStyles,
} from "../../styles";
import Textarea from "@mui/joy/Textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { INVALID_MESSAGE } from "../../../../assets/text.tsx";
import { containsLink, sendUserFeedback } from "../../../../utils/utils.tsx";

const ContactUsForm = () => {
    const contactUsFormRef = useRef<HTMLFormElement>(null);

    const sendEmail = (event: FormEvent) => {
        event.preventDefault();

        const contactUsFormElement = contactUsFormRef.current;

        if (contactUsFormElement) {
            const userFeedback = contactUsFormElement.userFeedback.value.trim();

            if (containsLink(userFeedback)) {
                toast(INVALID_MESSAGE);
                return;
            }

            sendUserFeedback(contactUsFormElement);
        }
    };

    return (
        <Box sx={contactUsPopoverMainContainerStyles}>
            <Box ref={contactUsFormRef} onSubmit={sendEmail} component="form">
                <InputLabel htmlFor="textarea" sx={contactUsPopoverFormStyles}>
                    {MESSAGE}
                </InputLabel>
                <Textarea
                    id="textarea"
                    name="userFeedback"
                    minRows={3}
                    sx={contactUsPopoverTextAreaStyles}
                    required
                />
                <Button
                    type="submit"
                    variant="text"
                    color="inherit"
                    sx={contactUsPopoverButtonStyles}
                >
                    {SEND}
                </Button>
            </Box>
            <ToastContainer />
        </Box>
    );
};

export default ContactUsForm;
