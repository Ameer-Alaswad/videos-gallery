export const mainBoxStyle = {
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

export const InstagramStyles = {
    fontSize: 60,
    marginLeft: 1,
    margin: "0 auto",
};

export const linkToInstagramStyle = {
    width: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    display: "flex",
};

export const imgListItemStyle = {
    ":hover": {
        transform: "scale(1.5)",
        zIndex: "10000",
        transition: "transform 0.7s",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export const mainImgListStyle = {
    width: "100%",
    height: "1700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
export const imgListStyle = {
    width: "750px",
    paddingLeft: "150px",
    paddingRight: "150px",
};
