import { useRef, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { Box, Button, InputLabel, TextareaAutosize } from "@mui/material";
import { MESSAGE, SEND } from "../../../../assets/text";
import {
    contactUsPopoverButtonStyles,
    contactUsPopoverTextAreaStyles,
    contactUsPopoverFormStyles,
} from "../../styles";

const serviceId = import.meta.env.VITE_SERVICE_ID as string;
const templateId = import.meta.env.VITE_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_PUBLIC_KEY as string;

const ContactUsForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, publicKey)
                .then(
                    (result: EmailJSResponseStatus) => {
                        console.log(result.text);
                    },
                    (error: EmailJSResponseStatus) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <Box
            sx={{
                width: "500px",
            }}
        >
            <Box ref={form} onSubmit={sendEmail} component="form">
                <InputLabel
                    htmlFor="my-textarea"
                    sx={contactUsPopoverFormStyles}
                >
                    {MESSAGE}
                </InputLabel>
                <TextareaAutosize
                    id="my-textarea"
                    name="message"
                    minRows={3}
                    style={contactUsPopoverTextAreaStyles}
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
        </Box>
    );
};

export default ContactUsForm;
