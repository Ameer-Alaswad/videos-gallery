import { Box, ImageListItem, ImageList } from "@mui/material";
import { useState } from "react";
import VideoPopupModal from "./display-video-modal";
import { studioVideosData } from "../../assets";
import VideoPlayer from "./display-video-modal/video";
import { imgListItemStyles, mainImgListStyles, imgListStyles } from "./styles";

export default function StandardImageList() {
    const [openVideo, setOpenVideo] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string>("");

    const handleOpenVideo = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        const targetElement = event.target as HTMLElement;
        const selectedVideoElement = targetElement.firstChild as HTMLElement;
        setVideoId(selectedVideoElement.id);
        setOpenVideo(true);
    };

    return (
        <Box sx={mainImgListStyles}>
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
                            id={videoID}
                            videoPath={videoPath}
                            openVideo={openVideo}
                        />
                    </ImageListItem>
                ))}
                <VideoPopupModal
                    videoId={videoId}
                    openVideo={openVideo}
                    setOpenVideo={setOpenVideo}
                />
            </ImageList>
        </Box>
    );
}
