import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function LazyImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-video",
}: LazyImageProps) {
  return (
    <div className={`relative ${aspectRatio} overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
