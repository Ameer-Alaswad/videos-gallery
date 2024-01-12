import { useRef, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
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

const serviceId = import.meta.env.VITE_SERVICE_ID as string;
const templateId = import.meta.env.VITE_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_PUBLIC_KEY as string;

const ContactUsForm = () => {
    const contactFormRef = useRef<HTMLFormElement>(null);

    const sendEmail = (event: FormEvent) => {
        event.preventDefault();

        if (contactFormRef.current) {
            const message = contactFormRef.current.userFeedback.value.trim();

            if (containsLink(message)) {
                toast("Invalid message. Please check and try again.");
                return;
            }

            emailjs
                .sendForm(
                    serviceId,
                    templateId,
                    contactFormRef.current,
                    publicKey
                )
                .then(
                    () => {
                        toast(`Message sent`);
                    },
                    (error: EmailJSResponseStatus) => {
                        const errorMessage =
                            error.text || "An unknown error occurred";
                        toast(`Error: ${errorMessage}`);
                    }
                );
        }
    };

    const containsLink = (text: string): boolean => {
        const linkRegex = /(http[s]?:\/\/[^\s]+)/;
        return linkRegex.test(text);
    };

    return (
        <Box sx={contactUsPopoverMainContainerStyles}>
            <Box ref={contactFormRef} onSubmit={sendEmail} component="form">
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
