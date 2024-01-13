import { ERROR_OCCURRED } from "../assets/text.tsx";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const serviceId = import.meta.env.VITE_SERVICE_ID as string;
const templateId = import.meta.env.VITE_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_PUBLIC_KEY as string;

export const sendUserFeedback = (contactUsFormElement: HTMLFormElement) => {
    emailjs
        .sendForm(serviceId, templateId, contactUsFormElement, publicKey)
        .then(
            () => {
                toast(`Message sent`);
                contactUsFormElement.reset();
            },
            (error: EmailJSResponseStatus) => {
                const errorMessage = error.text || ERROR_OCCURRED;
                toast(`Error: ${errorMessage}`);
            }
        );
};

export const containsLink = (text: string): boolean => {
    const linkRegex = /(http[s]?:\/\/[^\s]+)/;
    return linkRegex.test(text);
};
