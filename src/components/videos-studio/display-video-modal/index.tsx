import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { studioVideosData } from "../../../assets";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { mainBoxStyle } from "./style.tsx";
import { useState } from "react";

const toInstagramStyles = {
    fontSize: 60,
    marginLeft: 1,
    margin: "0 auto",
};

interface BasicModalProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    videoId: string;
}

const BasicModal: React.FC<BasicModalProps> = ({ setOpen, open, videoId }) => {
    const handleClose = () => setOpen(false);
    const [instagramIconVisible, setInstagramIconVisible] =
        useState<boolean>(false);

    const handleMouseEnter = () => {
        setInstagramIconVisible(true);
    };

    const handleMouseLeave = () => {
        setInstagramIconVisible(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={mainBoxStyle}>
                {videoId &&
                    studioVideosData.map((item) => {
                        if (item.id === videoId) {
                            return (
                                <div
                                    style={{
                                        position: "relative",
                                    }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <video
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            transition: "transform 1s",
                                            objectFit: "fill",
                                        }}
                                        loop
                                        // muted={open ? false : true}
                                        muted
                                        autoPlay
                                    >
                                        <source
                                            id={item.id}
                                            src={`${item.videoPath}`}
                                            type="video/mp4"
                                        />
                                    </video>

                                    {instagramIconVisible && (
                                        <Link
                                            aria-label="Visit our Instagram page"
                                            data-testid="to-instagram-link"
                                            href="https://www.google.com"
                                            color="inherit"
                                            underline="none"
                                            target="_blank"
                                            sx={{
                                                width: "100%",
                                                position: "absolute",
                                                bottom: "0%",
                                                right: "0%",
                                                background:
                                                    "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                                                display: "flex",
                                            }}
                                        >
                                            <InstagramIcon
                                                data-testid="to-instagram-icon"
                                                sx={toInstagramStyles}
                                            />
                                        </Link>
                                    )}
                                </div>
                            );
                        }
                    })}
            </Box>
        </Modal>
    );
};
export default BasicModal;
