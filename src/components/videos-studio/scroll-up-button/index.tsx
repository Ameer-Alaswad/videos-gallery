import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import NorthIcon from "@mui/icons-material/North";
const ScrollToTopButton = () => {
    const [scrollUpButtonIsVisible, setScrollUpButtonIsVisible] =
        useState(false);

    useEffect(() => {
        const handleScrollTop = () => {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                setScrollUpButtonIsVisible(true);
            } else {
                setScrollUpButtonIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScrollTop);

        return () => {
            window.removeEventListener("scroll", handleScrollTop);
        };
    }, []);

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const StyledButton = styled("button")({
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#fff",
        color: "#2d2d2d",
        border: "none",
        borderRadius: "5px",
        padding: "10px",
        cursor: "pointer",
        height: "60px",
    });

    return (
        <StyledButton
            onClick={scrollToTop}
            sx={{ display: scrollUpButtonIsVisible ? "block" : "none" }}
        >
            <NorthIcon fontSize="large" />
        </StyledButton>
    );
};

export default ScrollToTopButton;
