import { useEffect, useRef } from "react";

const AudioPlayer = ({
  // setIsLoading,
  audioFile,
}: {
  // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  audioFile: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = audioFile;
    audio.loop = true;
    audio.autoplay = true;
    audio.currentTime = 0;

    const handleCanPlayThrough = () => {
      // setIsLoading(false);
      audio.play();
    };

    audio.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, [audioFile]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <button
      className="fixed right-2 bottom-4 rounded-full aspect-square bg-white z-50 border border-gray-300 shadow-md flex items-center justify-center"
      onClick={handlePlayPause}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`h-4 w-4 ${audioRef.current.paused ? "" : ""}`}
      >
        {audioRef.current.paused ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        )}
      </svg>
    </button>
  );
};

export default AudioPlayer;
