import { CSSProperties } from "react";

interface videoProps {
    width?: string;
    height?: string;
    objectFit?: CSSProperties["objectFit"];
    videoID: string;
    videoPath: string;
    openVideo: boolean;
    activeVideoId?: string;
}

const VideoPlayer = ({
    width,
    height,
    objectFit,
    videoID,
    videoPath,
    openVideo,
    activeVideoId,
}: videoProps) => {
    const videoStyles: CSSProperties = {
        width: width || "100%",
        height: height || "100%",
        transition: "transform 1s",
        objectFit: objectFit || "fill",
    };

    const isNotMuted = activeVideoId === videoID && openVideo ? false : true;

    return (
        <video data-testid={ videoID } style={ videoStyles } autoPlay loop muted={ isNotMuted }>
            <source id={ videoID } src={ `${videoPath}` } type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;
