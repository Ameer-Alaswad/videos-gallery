type videoProps = {
    id: string;
    videoPath: string;
};

const Video = ({ id, videoPath }: videoProps) => {
    return (
        <video
            style={{
                width: "100%",
                height: "100%",
                transition: "transform 1s",
                objectFit: "fill",
            }}
            loop
            // muted={open ? false : true}
            muted
            autoPlay
        >
            <source id={id} src={`${videoPath}`} type="video/mp4" />
        </video>
    );
};

export default Video;
