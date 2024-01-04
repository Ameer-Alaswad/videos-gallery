import { Box, Modal } from "@mui/material";
import { studioVideosData } from "../../../assets";
import { mainBoxStyle } from "../style.tsx";
import InstagramLink from "./instagram-icon/index.tsx";
import { useState } from "react";
import Video from "./video/index.tsx";

interface BasicModalProps {
    setOpenVideo: React.Dispatch<React.SetStateAction<boolean>>;
    openVideo: boolean;
    videoId: string;
}

const BasicModal: React.FC<BasicModalProps> = ({
    setOpenVideo,
    openVideo,
    videoId,
}) => {
    const handleClose = () => setOpenVideo(false);

    const [instagramIconVisible, setInstagramIconVisible] =
        useState<boolean>(false);

    return (
        <Modal
            open={openVideo}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={mainBoxStyle}>
                {videoId &&
                    studioVideosData.map(({ id, videoPath, instagramLink }) => {
                        if (id === videoId) {
                            return (
                                <div
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
                                    <Video
                                        id={id}
                                        videoPath={videoPath}
                                        openVideo={openVideo}
                                    />

                                    {instagramIconVisible && (
                                        <InstagramLink
                                            instagramLink={instagramLink}
                                        />
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
