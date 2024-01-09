import { useRef, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { Box, Button, InputLabel, TextareaAutosize } from "@mui/material";
import { MESSAGE, SEND } from "../../../../assets/text";
import {
    contactUsPopoverButtonStyles,
    contactUsPopoverTextAreaStyles,
    contactUsPopoverFormStyles,
} from "../../styles";
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
            emailjs
                .sendForm(
                    serviceId,
                    templateId,
                    contactFormRef.current,
                    publicKey
                )
                .then(
                    (result: EmailJSResponseStatus) => {
                        const successMessage = result.text || "";
                        toast(`${successMessage}, Message sent`);
                    },
                    (error: EmailJSResponseStatus) => {
                        const errorMessage =
                            error.text || "An unknown error occurred";
                        toast(`Error: ${errorMessage}`);
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
            <Box ref={contactFormRef} onSubmit={sendEmail} component="form">
                <InputLabel htmlFor="textarea" sx={contactUsPopoverFormStyles}>
                    {MESSAGE}
                </InputLabel>
                <TextareaAutosize
                    id="textarea"
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
            <ToastContainer />
        </Box>
    );
};

export default ContactUsForm;
