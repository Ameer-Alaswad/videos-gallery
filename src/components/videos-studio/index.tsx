import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/material";
import { useState } from "react";
import BasicModal from "./display-video-modal";
import { studioVideosData } from "../../assets";

export default function StandardImageList() {
    const [open, setOpen] = useState<boolean>(false);
    const [videoLink, setVideoLink] = useState<string>("");

    const handleOpen = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const targetElement = event.target as HTMLElement;
        const firstChild = targetElement.firstChild as HTMLElement;
        setVideoLink(firstChild.id);
        setOpen(true);
    };
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ImageList cols={3} rowHeight={231}>
                {studioVideosData.map((item) => (
                    <ImageListItem
                        onClick={(event) => handleOpen(event)}
                        sx={{
                            ":hover": {
                                transform: "scale(1.5)",
                                zIndex: "10000",
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        key={item.video}
                    >
                        <video
                            style={{
                                width: "250px",
                                height: "200px",
                                transition: "transform 0.3s",
                                objectFit: "cover",
                            }}
                            loop
                            muted
                            autoPlay
                        >
                            <source
                                id={item.title}
                                src={`${item.video}`}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </ImageListItem>
                ))}
                <BasicModal
                    videoLink={videoLink}
                    open={open}
                    setOpen={setOpen}
                />
            </ImageList>
        </Box>
    );
}
