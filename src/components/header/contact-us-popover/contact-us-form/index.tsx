import { useRef, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { Box, Button, InputLabel, TextareaAutosize } from "@mui/material";
import { MESSAGE, SEND } from "../../../../assets/text";
import { buttonStyles, textAreaStyles } from "./styles";

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
            <form ref={form} onSubmit={sendEmail}>
                <InputLabel
                    htmlFor="my-textarea"
                    sx={{ textAlign: "center", padding: "10px" }}
                >
                    {MESSAGE}
                </InputLabel>
                <TextareaAutosize
                    id="my-textarea"
                    name="message"
                    minRows={3}
                    style={textAreaStyles}
                />
                <Button
                    type="submit"
                    variant="text"
                    color="inherit"
                    style={buttonStyles}
                >
                    {SEND}
                </Button>
            </form>
        </Box>
    );
};

export default ContactUsForm;
