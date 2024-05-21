// components/VideoPlayer.tsx
import { useState } from 'react';

interface VideoPlayerProps {
  thumbnail: string;
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ thumbnail, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {!isPlaying ? (
        <div className="relative cursor-pointer" onClick={handlePlay}>
          <img src={thumbnail} alt="Video Thumbnail" className="w-full rounded-3xl" />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-16 h-16 flex items-center justify-center"
          >
            ▶
          </button>
        </div>
      ) : (
        <video className="w-full rounded-3xl" controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
