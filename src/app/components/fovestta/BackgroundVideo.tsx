import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  opacity?: number;
  overlayColor?: string;
}

export function BackgroundVideo({
  opacity = 0.4,
  overlayColor = "bg-black/60"
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower for cinematic effect
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background - Using free stock video placeholder */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        {/* Placeholder - In production, use actual HRMS office/team videos */}
        {/* MP4 format for best compatibility */}
        <source
          src="https://cdn.coverr.co/videos/coverr-business-team-working-together-6013/1080p.mp4"
          type="video/mp4"
        />
        {/* WebM format for modern browsers */}
        <source
          src="https://cdn.coverr.co/videos/coverr-business-team-working-together-6013/1080p.webm"
          type="video/webm"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className={`absolute inset-0 ${overlayColor}`}></div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118]/90 via-[#0A0118]/70 to-[#0A0118]/90"></div>
    </div>
  );
}
