import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { studioVideosData } from "../../../../assets";
import VideoPopupModal from "..";
import VideosStudio from "../..";

describe("VideoPopupModal Component", () => {
    test("testing VideoPopupModal renders and the instagram pops and gets removed when modal is hovered on properly", () => {
        const setOpenVideo = jest.fn();
        const openVideo = false;
        const activeVideoId = studioVideosData[0].videoID;

        render(<VideosStudio />);
        render(
            <VideoPopupModal
                setOpenVideo={ setOpenVideo }
                openVideo={ openVideo }
                activeVideoId={ activeVideoId }
            />
        );
        const videoPopupModal = screen.queryByTestId("video-popup-modal");
        expect(videoPopupModal).toBeNull();

        fireEvent.click(screen.getAllByTestId("1")[0]);
        expect(screen.getByTestId("video-popup-modal")).toBeInTheDocument();
        const mainModalContainer = screen.getByTestId("main-modal-container");
        expect(mainModalContainer).toBeInTheDocument();

        fireEvent.mouseEnter(mainModalContainer);

        const toInstagramLink = screen.getByTestId("to-instagram-link");
        const toInstagramIcon = screen.getByTestId("to-instagram-icon");
        expect(toInstagramLink).toBeInTheDocument();
        expect(toInstagramIcon).toBeInTheDocument();

        fireEvent.mouseLeave(mainModalContainer);
        expect(screen.queryByTestId("to-instagram-link")).not.toBeInTheDocument();
    });
});
