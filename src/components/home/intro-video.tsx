"use client";

import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import PauseLogo from "@/assets/home/icons/pause.svg";
import PlayLogo from "@/assets/home/icons/play.svg";

export default function IntroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative flex aspect-video w-full items-center justify-center overflow-hidden">
      {/* Video Container */}
      <div className="absolute h-full w-full">
        <div className="h-full w-full overflow-hidden bg-black">
          <div className="group relative h-full w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/home/video/intro.mp4" type="video/mp4" />
              <track
                kind="captions"
                src="/home/video/intro-captions.vtt"
                srcLang="en"
                label="English captions"
                default
              />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause overlay */}
            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <button
                type="button"
                onClick={togglePlayPause}
                className="pointer-events-auto cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <Image
                  src={isPlaying ? PauseLogo : PlayLogo}
                  alt={isPlaying ? "Pause" : "Play"}
                  className="h-auto w-auto"
                />
              </button>
            </div>

            {/* Audio toggle button */}
            <button
              type="button"
              onClick={toggleMute}
              className="absolute right-4 bottom-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX /> : <Volume2 />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
