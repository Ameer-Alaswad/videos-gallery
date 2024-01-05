import { useRef, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { Box, Input } from "@mui/material";
import { CONTACT_ME } from "../../../../assets/text";

const ContactUsForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "YOUR_SERVICE_ID",
                    "YOUR_TEMPLATE_ID",
                    form.current,
                    "YOUR_PUBLIC_KEY"
                )
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
        <Box>
            <form ref={form} onSubmit={sendEmail}>
                <label style={{ fontSize: "30px", margin: "15px" }}>
                    {CONTACT_ME}
                </label>
                <Input
                    color="primary"
                    placeholder="  send me a message"
                    name="message"
                    sx={{
                        margin: "10px",
                        border: "1px black solid",
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                    }}
                />
                <input
                    type="submit"
                    value="Send"
                    style={{ fontSize: "20px", margin: "15px" }}
                />
            </form>
        </Box>
    );
};

export default ContactUsForm;
