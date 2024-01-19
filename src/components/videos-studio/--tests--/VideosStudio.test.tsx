import { render, screen, fireEvent } from '@testing-library/react';
import VideosStudio from '..';
import '@testing-library/jest-dom';
import { studioVideosData } from '../../../assets';

describe('VideosStudio Component renders', () => {
    test('should render VideosStudio component correctly', () => {
        render(<VideosStudio />);

        expect(screen.getByTestId('videos-list-main-container')).toBeInTheDocument();
        expect(screen.getByTestId('videos-list-container')).toBeInTheDocument();
    });

    test('should render all videos in the studioVideosData array', () => {
        render(<VideosStudio />);

        const displayedVideoItems = screen.getAllByTestId("displayed-video-item");
        expect(displayedVideoItems.length).toEqual(studioVideosData.length);

    });

    test('should display VideoPopupModal when a video is clicked', () => {
        render(<VideosStudio />);

        const videoPopupModal = screen.queryByTestId('video-popup-modal');
        expect(videoPopupModal).toBeNull();

        fireEvent.click(screen.getAllByTestId("1")[0]);

        expect(screen.queryByTestId('video-popup-modal')).toBeInTheDocument();
    });
});
