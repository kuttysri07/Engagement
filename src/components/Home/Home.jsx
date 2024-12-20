import React, { useEffect, useRef, useState } from "react";
import { Music4 } from "lucide-react";
import AudioFile from "../../assets/audio.mp3";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

  // Use a ref to control the audio element
  const audioRef = useRef(new Audio(AudioFile));

  useEffect(() => {
    const audio = audioRef.current;

    // Set volume to 0.3 when the component mounts
    audio.volume = 0.3;

    // Play the audio automatically after setting the volume
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });

    return () => {
      // Pause the audio when the component unmounts
      audio.pause();
    };
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;

    // Toggle play/pause state on click
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Set interval to toggle the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => !prevIndex); // Toggle state
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homecontainer relative h-screen">
      {/* Background Images */}
      <div className="back-img h-full w-full relative">
        {/* First Image */}
        <img
          className={`h-full w-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          src="./KKM_0302.JPG"
          alt="Background 1"
        />

        {/* Second Image */}
        <img
          className={`h-full w-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            !currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          src="./KKM_0229.JPG"
          alt="Background 2"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center">
        <h1 className="text-4xl font-Wedding font-bold mb-8 md:text-5xl lg:text-7xl">
          Arun & Sowmi
        </h1>
        <h2 className="text-2xl border-y p-3 md:text-4xl lg:text-5xl">
          We're Getting Married
        </h2>
      </div>

      {/* Audio Control Button */}
      <div
        onClick={handlePlay}
        className="fixed bottom-4 left-4  hover:bg-gray-700 bg-black rounded-3xl p-3 z-50 cursor-pointer animate-bounce"
      >
        <Music4
          color="white"
          className="lg:h-5 bg-transparent cursor-pointer "
        />
      </div>

  
    </div>
  );
};  

export default Home;
