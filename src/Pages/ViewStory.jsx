import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const stories = [
  {
    id: 1,
    mediaType: "image",
    mediaSrc: "https://i.pinimg.com/736x/86/c8/da/86c8da0ec39be5b43d8ef124242d409e.jpg",
  },
  {
    id: 2,
    mediaType: "video",
    mediaSrc: "/videos/mata.mp4",
  },
  {
    id: 3,
    mediaType: "image",
    mediaSrc: "https://i.pinimg.com/736x/3a/b6/8f/3ab68f242fe7fca29a39e6895cb94864.jpg",
  },
];

const ViewStory = ({ duration = 5000 }) => {
  const [currentStory, setCurrentStory] = useState(0);
  const progressBarRef = useRef(null);
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = "0%"; // Reset progress bar width
    }

    // Animate the progress bar when the video is ready
    gsap.to(progressBarRef.current, {
      width: "100%",
      duration: duration / 1000,
      ease: "linear",
    });
  }, [currentStory, duration]);

  // Handle next story navigation
  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
    }
  };

  // Handle previous story navigation
  const prevStory = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    }
  };

  // Handle video playback and update progress bar
  const onTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
    }
  };

  // Handle video end event
  const onVideoEnd = () => {
    nextStory(); // Go to the next story when video ends
  };

  // Render media (image or video)
  const renderMedia = (mediaType, mediaSrc) => {
    if (mediaType === "video") {
      return (
        <video
          ref={videoRef}
          className="h-full w-full"
          autoPlay
          
          loop={false}
          onEnded={onVideoEnd} // Call onVideoEnd when the video ends
          onTimeUpdate={onTimeUpdate} // Track video's time to update the progress bar
          src={mediaSrc}
        ></video>
      );
    }
    return <img className="h-full w-full" src={mediaSrc} alt="Story Media" />;
  };

  return (
    <div className="h-screen w-screen">
      <div className="story p-2 relative h-[80vh] w-full  z-100 flex items-start flex-col">
        {/* Swipe Navigation */}
        <div className="swipe absolute left-0 top-0 bg-transparent h-full w-full z-[100] flex">
          <div onClick={prevStory} className="sw-left h-full w-1/2"></div>
          <div onClick={nextStory} className="sw-right h-full w-1/2"></div>
        </div>

        {/* Media Content */}
        <div className="absolute left-0 top-0 h-full w-full">
          {renderMedia(stories[currentStory].mediaType, stories[currentStory].mediaSrc)}
        </div>

        {/* Progress Bar */}
        <div className="progress-bar h-[2px] w-full bg-gray-400/50 z-[101] mb-3 rounded-full overflow-hidden">
          <div ref={progressBarRef} className="progress h-full w-0 bg-white"></div>
        </div>

        {/* User Info */}
        <div className="user-info flex gap-3 px-1 relative">
          <img className="h-9 w-9 rounded-full" src="https://i.pinimg.com/736x/20/a0/6d/20a06d5a47fa67a17b1fd31992f2d4c3.jpg" alt="" />
          <div>
            <h4 className="text-[13px]">Username</h4>
            <h4 className="text-[11px]">title</h4>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar fixed w-full bottom-0 left-0 p-2 px-4 flex items-center justify-between">
          <div className="msg h-10 w-[75%] border-[0.7px] border-gray-500 rounded-[50px]">
            <input className="h-full w-full px-3 outline-none" type="text" placeholder="Message" />
          </div>
          <div className="flex gap-3">
            {/* Like and Share icons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStory;
