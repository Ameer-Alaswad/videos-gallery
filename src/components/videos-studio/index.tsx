import { Box, ImageListItem, ImageList } from "@mui/material";
import { useState } from "react";
import VideoPopupModal from "./display-video-modal";
import { studioVideosData } from "../../assets";
import VideoPlayer from "./display-video-modal/video";
import {
    imgListItemStyles,
    imgListMainContainerStyles,
    imgListStyles,
} from "./styles";
import ScrollToTopButton from "./scroll-up-button";

export default function VideosStudio() {
    const [openVideo, setOpenVideo] = useState<boolean>(false);
    const [activeVideoId, setActiveVideoId] = useState<string>("");

    const handleOpenVideo = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        const targetElement = event.target as HTMLElement;
        const selectedVideoElement = targetElement.firstChild as HTMLElement;
        setActiveVideoId(selectedVideoElement.id);
        setOpenVideo(true);
    };

    return (
        <Box data-testid="image-list" sx={imgListMainContainerStyles}>
            <ImageList sx={imgListStyles}>
                {studioVideosData.map(({ videoID, videoPath }) => (
                    <ImageListItem
                        onClick={(event) => handleOpenVideo(event)}
                        sx={imgListItemStyles}
                        key={videoID}
                    >
                        <VideoPlayer
                            width={"200px"}
                            height={"200px"}
                            objectFit={"cover"}
                            videoID={videoID}
                            activeVideoId={activeVideoId}
                            videoPath={videoPath}
                            openVideo={openVideo}
                        />
                    </ImageListItem>
                ))}
                <VideoPopupModal
                    activeVideoId={activeVideoId}
                    openVideo={openVideo}
                    setOpenVideo={setOpenVideo}
                />
            </ImageList>
            <ScrollToTopButton />
        </Box>
    );
}
