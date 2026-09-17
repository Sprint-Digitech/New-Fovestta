import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Fovestta HR Software"
        width={1024}
        height={542}
        priority
        className="h-10 lg:h-12 w-auto object-contain"
      />
    </div>
  );
}
