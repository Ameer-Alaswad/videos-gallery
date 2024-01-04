import { Box, ImageListItem, ImageList } from "@mui/material";
import { useState } from "react";
import BasicModal from "./display-video-modal";
import { studioVideosData } from "../../assets";
import Video from "./display-video-modal/video";
import { imgListItemStyles, mainImgListStyles, imgListStyles } from "./styles";

export default function StandardImageList() {
    const [openVideo, setOpenVideo] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string>("");

    const handleOpen = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const targetElement = event.target as HTMLElement;
        const selectedVideoElement = targetElement.firstChild as HTMLElement;
        setVideoId(selectedVideoElement.id);
        setOpenVideo(true);
    };

    return (
        <Box sx={mainImgListStyles}>
            <ImageList sx={imgListStyles}>
                {studioVideosData.map(({ id, videoPath }) => (
                    <ImageListItem
                        onClick={(event) => handleOpen(event)}
                        sx={imgListItemStyles}
                        key={id}
                    >
                        <Video
                            width={"200px"}
                            height={"200px"}
                            objectFit={"cover"}
                            id={id}
                            videoPath={videoPath}
                            openVideo={openVideo}
                        />
                    </ImageListItem>
                ))}
                <BasicModal
                    videoId={videoId}
                    openVideo={openVideo}
                    setOpenVideo={setOpenVideo}
                />
            </ImageList>
        </Box>
    );
}
