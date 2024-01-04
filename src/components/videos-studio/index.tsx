import { Box, ImageListItem, ImageList } from "@mui/material";
import { useState } from "react";
import BasicModal from "./display-video-modal";
import { studioVideosData } from "../../assets";
import Video from "./display-video-modal/video";
import { imgListItemStyle, mainImgListStyle, imgListStyle } from "./style";

export default function StandardImageList() {
    const [openVideo, setOpenVideo] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string>("");

    const handleOpen = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const targetElement = event.target as HTMLElement;
        const firstChild = targetElement.firstChild as HTMLElement;
        setVideoId(firstChild.id);
        setOpenVideo(true);
    };

    return (
        <Box sx={mainImgListStyle}>
            <ImageList sx={imgListStyle}>
                {studioVideosData.map(({ id, videoPath }) => (
                    <ImageListItem
                        onClick={(event) => handleOpen(event)}
                        sx={imgListItemStyle}
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
