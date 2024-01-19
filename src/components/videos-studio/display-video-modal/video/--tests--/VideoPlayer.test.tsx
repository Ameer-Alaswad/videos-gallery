import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import VideoPlayer from "..";

describe("test VideoPlayer component", () => {
    test("VideoPlayer renders correctly with default props", () => {
        render(
            <VideoPlayer
                videoID="1"
                videoPath="https://res.cloudinary.com/dr783zt4v/video/upload/v1704061779/Videos/vu6ofydzlrg9uofe9vgf.mp4"
                openVideo={ false }
            />
        );

        const videoElement = screen.getByTestId("1");
        expect(videoElement).toBeInTheDocument();
    });

    it("should set the muted property to false if activeVideoId is equal to videoID and openVideo is true", () => {
        const videoID = "testVideoID";
        const videoPath = "https://path/to/video.mp4";
        const activeVideoId = videoID;
        const openVideo = true;

        const { container } = render(
            <VideoPlayer
                videoID={ videoID }
                videoPath={ videoPath }
                activeVideoId={ activeVideoId }
                openVideo={ openVideo }
            />
        );

        const videoElement = container.querySelector("video");
        expect(videoElement?.muted).toBe(false);
    });
    it("should set the muted property to true if activeVideoId is not equal to videoID or openVideo is false", () => {
        const videoID = "testVideoID";
        const videoPath = "https://path/to/video.mp4";
        const activeVideoId = "otherVideoID";
        const openVideo = false;

        const { container } = render(
            <VideoPlayer
                videoID={ videoID }
                videoPath={ videoPath }
                activeVideoId={ activeVideoId }
                openVideo={ openVideo }
            />
        );

        const videoElement = container.querySelector("video");
        expect(videoElement?.muted).toBe(true);
    });
});
