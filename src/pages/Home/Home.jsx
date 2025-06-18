import React, { useEffect, useRef, useState } from 'react';
import './Home.css'; // Import the CSS file

const videoSources = [
    '/videos/vid1.mp4',
    '/videos/vid2.mp4',
    '/videos/vid3.mp4',
];

const Home = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videoSources.length);
        }, 5000); // Change every 2 seconds (you can adjust)

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const video = videoRef.current;

        const playVideo = () => {
            // Wait for the video to be ready to play
            video.play().catch((error) => {
                console.error('Video play failed', error);
            });
        };

        if (video) {
            video.src = videoSources[currentVideo]; // Update the video source
            video.load(); // Reload the video source
            video.addEventListener('canplaythrough', playVideo);

            // Clean up event listener
            return () => {
                video.removeEventListener('canplaythrough', playVideo);
            };
        }
    }, [currentVideo]);

    return (
        <div className="home-container">

            <video
                ref={videoRef}
                className="background-video"
                muted
                autoPlay
                loop={false} // No loop because we manually change
                playsInline
            >
                <source src={videoSources[currentVideo]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Your actual content */}
            <div className="content">
                <h1 className="title">Welcome to My Website</h1>
                {/* <p className="description">Enjoy the dynamic background videos!</p> */}
            </div>
        </div>
    );
};

export default Home;
