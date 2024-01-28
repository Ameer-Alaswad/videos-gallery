import { Box, Modal } from "@mui/material";
import { studioVideosData } from "../../../assets";
import { mainModalBoxStyles } from "../styles.tsx";
import InstagramLink from "./instagram-icon/index.tsx";
import { useState } from "react";
import VideoPlayer from "./video/index.tsx";

interface VideoPopupModalProps {
    setOpenVideo: React.Dispatch<React.SetStateAction<boolean>>;
    openVideo: boolean;
    activeVideoId: string;
}

const VideoPopupModal: React.FC<VideoPopupModalProps> = ({
    setOpenVideo,
    openVideo,
    activeVideoId,
}) => {
    const handleCloseVideo = () => setOpenVideo(false);

    const [instagramIconVisible, setInstagramIconVisible] =
        useState<boolean>(false);

    const activeVideo = studioVideosData.find(
        ({ videoID }) => videoID === activeVideoId
    );

    if (!activeVideo) {
        return null;
    }
    return (
        <Modal
            open={ openVideo }
            onClose={ handleCloseVideo }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            data-testid="video-popup-modal"
        >
            <Box sx={ mainModalBoxStyles }>
                <Box
                    data-testid="main-modal-container"
                    sx={ {
                        position: "relative",
                    } }
                    onMouseEnter={ () => setInstagramIconVisible(true) }
                    onMouseLeave={ () => setInstagramIconVisible(false) }
                >
                    <VideoPlayer
                        videoID={ activeVideo.videoID }
                        videoPath={ activeVideo.videoPath }
                        openVideo={ openVideo }
                    />

                    { instagramIconVisible && (
                        <InstagramLink
                            instagramLink={ activeVideo.instagramLink }
                        />
                    ) }
                </Box>
            </Box>
        </Modal>
    );
};
export default VideoPopupModal;
