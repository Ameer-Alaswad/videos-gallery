import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { studioVideosData } from "../../../assets";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const toInstagramStyles = {
    fontSize: 60,
    marginLeft: 1,
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "none",
    "&:focus": {
        outline: "none",
    },
};
interface BasicModalProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    videoId: string;
}

const BasicModal: React.FC<BasicModalProps> = ({ setOpen, open, videoId }) => {
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} id="1">
                {videoId &&
                    studioVideosData.map((item) => {
                        if (item.id === videoId) {
                            return (
                                <div
                                    id="2"
                                    style={{
                                        position: "relative",
                                    }}
                                >
                                    <video
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            transition: "transform 1s",
                                            objectFit: "fill",
                                        }}
                                        loop
                                        muted={open ? false : true}
                                        autoPlay
                                    >
                                        <source
                                            id={item.id}
                                            src={`${item.videoPath}`}
                                            type="video/mp4"
                                        />
                                    </video>
                                    <Box
                                        style={{
                                            position: "absolute",
                                            bottom: "10%",
                                            right: "40%",
                                        }}
                                        id="3"
                                    >
                                        <Link
                                            aria-label="Visit our Instagram page"
                                            data-testid="to-instagram-link"
                                            href="https://www.google.com"
                                            color="inherit"
                                            underline="none"
                                            target="_blank"
                                        >
                                            <InstagramIcon
                                                data-testid="to-instagram-icon"
                                                sx={toInstagramStyles}
                                            />
                                        </Link>
                                    </Box>
                                </div>
                            );
                        }
                    })}
            </Box>
        </Modal>
    );
};
export default BasicModal;
