export const mainModalBoxStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    border: "none",
    "&:focus": {
        outline: "none",
    },
    "@media screen and (max-width: 480px)": {
        height: "70vh",
        width: "80vw",
    },
};

export const InstagramStyles = {
    fontSize: 60,
    marginLeft: 1,
    margin: "0 auto",
};

export const linkToInstagramStyles = {
    width: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    display: "flex",
};

export const imgListItemStyles = {
    margin: "10px",
    transition: "transform 0.4s",
};

export const imgListMainContainerStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export const imgListStyles = {
    width: "680px",
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    overflow: "visible",
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
        width: "445px",
    },
    "@media screen and (max-width: 480px)": {
        width: "220px",
    },
};
