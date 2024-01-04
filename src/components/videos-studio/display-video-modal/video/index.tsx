import { CSSProperties } from "react";

interface videoProps {
    width?: string;
    height?: string;
    objectFit?: CSSProperties["objectFit"];
    videoID: string;
    videoPath: string;
    openVideo: boolean;
}

const VideoPlayer = ({
    width,
    height,
    objectFit,
    videoID,
    videoPath,
    openVideo,
}: videoProps) => {
    const videoStyle: CSSProperties = {
        width: width || "100%",
        height: height || "100%",
        transition: "transform 1s",
        objectFit: objectFit || "fill",
    };

    return (
        <video
            style={videoStyle}
            loop
            muted={openVideo ? false : true}
            autoPlay
        >
            <source id={videoID} src={`${videoPath}`} type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;
