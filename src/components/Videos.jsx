import React, { useState, useEffect } from 'react';

const VideoHeader = ({ title }) => (
  <header className="video-header">
    <h1 className="video-header-title">{title}</h1>
  </header>
);

const VideoList = ({ videos, onSelectVideo }) => (
  <div className="video-container">
    <div className="video-grid">
      {videos.map((video) => (
        <button
          key={video.id}
          className="video-card"
          onClick={() => {
            console.log('Selecting video:', video.title);
            onSelectVideo(video);
          }}
          aria-label={`View video: ${video.title}`}
        >
          <div className="thumbnail-container">
            <img
              src={video.thumbnail}
              alt={`${video.title} thumbnail`}
              className="thumbnail"
              onError={(e) => console.error('Thumbnail error:', video.thumbnail)}
            />
            <div className="play-overlay">
              <svg
                className="play-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l4-2a1 1 0 000-1.664l-4-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="duration">{video.duration}</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">{video.title}</h3>
            <p className="card-description">{video.description}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const VideoDetail = ({ video, onBack }) => {
  console.log('Rendering video:', video);
  return (
    <div className="video-detail-container">
      <button
        className="back-button"
        onClick={() => {
          console.log('Going back to video list');
          onBack();
        }}
        aria-label="Back to video list"
      >
        <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Videos
      </button>
      <div className="video-player-card">
        <video
          className="video-player"
          controls
          autoPlay
          muted // Add muted to allow autoplay in most browsers
          preload="metadata"
          aria-label={`Playing video: ${video.title}`}
          onError={(e) => console.error('Video error:', video.url, e)}
        >
          <source src={video.url} type="video/mp4" />
          <source src={video.url.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag. Please try a different browser or contact support.
        </video>
        <div className="video-info">
          <h2 className="video-title">{video.title}</h2>
          <p className="video-description">{video.description}</p>
          <p className="video-duration">Duration: {video.duration}</p>
        </div>
      </div>
    </div>
  );
};

const QueryForm = () => (
  <div className="form-container">
    <div className="form-card">
      <h3 className="form-title">Have Questions?</h3>
      <form className="query-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="form-input"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            className="form-input"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows="4"
            className="form-textarea"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="form-submit">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: 'Robros-Next Robotic Arm Demo',
        description: 'Showcase of our advanced robotic arm in action, demonstrating precision and efficiency.',
        thumbnail: '/pics/welding 1.jpg',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4', // Use a working URL for testing
        duration: '3:45',
      },
      {
        id: 2,
        title: 'Automation Solutions Overview',
        description: 'An overview of our cutting-edge automation solutions for various industries.',
        thumbnail: '/pics/cobot.jpg',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: '2:30',
      },
      {
        id: 3,
        title: 'EVS Robots in Manufacturing',
        description: 'See how EVS Robots enhance productivity in manufacturing environments.',
        thumbnail: '/images/welding 2.jpg',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: '4:10',
      },
      {
        id: 4,
        title: 'Logistics Automation Showcase',
        description: 'Explore our solutions for streamlining logistics and warehousing operations.',
        thumbnail: '/images/logistics.jpg',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: '3:20',
      },
      {
        id: 5,
        title: 'Smart Factory Integration',
        description: 'Discover how our robots integrate into smart factory ecosystems.',
        thumbnail: '/images/smart-factory.jpg',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: '3:00',
      },
      {
        id: 6,
        title: 'Robotic Welding Demo',
        description: 'Demonstration of our robotic welding capabilities for industrial applications.',
        thumbnail: '/images/welding-demo.jpg',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        duration: '2:45',
      },
    ];
    setVideos(mockData);
  }, []);

  return (
    <div className="app-container">
      <VideoHeader title={selectedVideo ? selectedVideo.title : 'Product Videos'} />
      {selectedVideo ? (
        <>
          <VideoDetail video={selectedVideo} onBack={() => setSelectedVideo(null)} />
          <QueryForm />
        </>
      ) : (
        <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
      )}
    </div>
  );
};

export default Videos;