import { Box, Modal } from "@mui/material";
import { studioVideosData } from "../../../assets";
import { mainModalBoxStyles } from "../styles.tsx";
import InstagramLink from "./instagram-icon/index.tsx";
import { useState } from "react";
import VideoPlayer from "./video/index.tsx";

interface BasicModalProps {
    setOpenVideo: React.Dispatch<React.SetStateAction<boolean>>;
    openVideo: boolean;
    videoId: string;
}

const VideoPopupModal: React.FC<BasicModalProps> = ({
    setOpenVideo,
    openVideo,
    videoId,
}) => {
    const handleCloseVideo = () => setOpenVideo(false);

    const [instagramIconVisible, setInstagramIconVisible] =
        useState<boolean>(false);

    return (
        <Modal
            open={openVideo}
            onClose={handleCloseVideo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={mainModalBoxStyles}>
                {videoId &&
                    studioVideosData.map(
                        ({ videoID, videoPath, instagramLink }) => {
                            if (videoID === videoId) {
                                return (
                                    <Box
                                        style={{
                                            position: "relative",
                                        }}
                                        onMouseEnter={() =>
                                            setInstagramIconVisible(true)
                                        }
                                        onMouseLeave={() =>
                                            setInstagramIconVisible(false)
                                        }
                                    >
                                        <VideoPlayer
                                            videoID={videoID}
                                            videoPath={videoPath}
                                            openVideo={openVideo}
                                        />

                                        {instagramIconVisible && (
                                            <InstagramLink
                                                instagramLink={instagramLink}
                                            />
                                        )}
                                    </Box>
                                );
                            }
                        }
                    )}
            </Box>
        </Modal>
    );
};
export default VideoPopupModal;
