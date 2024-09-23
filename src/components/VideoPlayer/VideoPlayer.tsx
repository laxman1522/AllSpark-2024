interface VideoPlayer {
  videoUrl: string;
}

/**
 * @description A reusable component for video player with iFrame
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */

const VideoPlayer: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  return (
    <div className="relative w-full p-2 flex justify-center bg-white border-10 border-[#270212]">
      <iframe
        src={String(videoUrl)}
        id="video-player"
        title="Video Player"
        className="border-none w-full h-[70vh]"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;