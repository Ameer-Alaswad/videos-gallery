import { useRef, FormEvent } from "react";
import { Box, Button, InputLabel } from "@mui/material";
import { MESSAGE, SEND } from "../../../../assets/text";
import {
    contactUsPopoverButtonStyles,
    contactUsPopoverFormStyles,
    contactUsPopoverMainContainerStyles,
} from "../../styles";
import { TextareaAutosize } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { INVALID_MESSAGE } from "../../../../assets/text.tsx";
import { containsLink, sendUserFeedback } from "../../../../utils/utils.tsx";
import { styled } from "@mui/system";

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: "80%",
    marginLeft: "5%",
    borderRadius: "8px",
    color: "black",
    padding: "25px",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "3%",
    },
}));

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
        <Box sx={ contactUsPopoverMainContainerStyles }>
            <Box ref={ contactUsFormRef } onSubmit={ sendEmail } component="form">
                <InputLabel
                    htmlFor="contactUsMessage"
                    sx={ contactUsPopoverFormStyles }
                >
                    { MESSAGE }
                </InputLabel>
                <StyledTextarea
                    id="contactUsMessage"
                    name="contactUsMessage"
                    minRows={ 3 }
                    required
                />
                <Button
                    type="submit"
                    variant="text"
                    color="inherit"
                    sx={ contactUsPopoverButtonStyles }
                >
                    { SEND }
                </Button>
                <ToastContainer />
            </Box>
        </Box>
    );
};

export default ContactUsForm;
