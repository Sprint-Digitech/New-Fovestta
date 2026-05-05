import { useEffect, useRef, useState } from "react";

interface LoopingVideoProps {
  title?: string;
  description?: string;
  className?: string;
}

export function LoopingVideo({
  title = "Product Demo",
  description,
  className = ""
}: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-white/10 shadow-2xl ${className}`}>
      {/* Video Container */}
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Dashboard/Software demo video placeholder */}
          <source
            src="https://cdn.coverr.co/videos/coverr-man-working-on-computer-7101/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-man-working-on-computer-7101/1080p.webm"
            type="video/webm"
          />
        </video>

        {/* Glassmorphism overlay with title */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h4 className="text-white text-xl mb-1">{title}</h4>
            {description && (
              <p className="text-gray-300 text-sm">{description}</p>
            )}
          </div>
        )}

        {/* Play indicator */}
        {!isInView && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
