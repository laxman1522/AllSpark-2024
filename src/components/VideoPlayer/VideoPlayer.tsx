import './VideoPlayer.scss';

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
    <div className="video relative ml-[2%] lg:ml-[3%] max-[1400px]:mt-[15vh] max-[712px]:mt[10vh] max-[767px]:mt-[2vh] lg:mt-[0vh] w-[84%] p-2 flex justify-center max-[767px]:m-auto shadow rounded">
      <iframe
        src={String(videoUrl)}
        id="video-player"
        title="Video Player"
        className="border-none w-full h-[70vh] max-h-[600px]:h-[30vh] overflow-auto"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
