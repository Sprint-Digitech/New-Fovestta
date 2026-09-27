"use client";

import { useState } from "react";

interface LoopingVideoProps {
  youtubeId: string;
  title?: string;
  description?: string;
  className?: string;
}

export function LoopingVideo({
  youtubeId,
  title = "Product Demo",
  description,
  className = ""
}: LoopingVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-white/10 shadow-2xl ${className}`}>
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block w-full h-full"
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbSrc}
              alt={title}
              className="w-full h-full object-cover"
              onError={() => setThumbSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`)}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

            {title && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
                <h4 className="text-white text-xl mb-1">{title}</h4>
                {description && (
                  <p className="text-gray-300 text-sm">{description}</p>
                )}
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
