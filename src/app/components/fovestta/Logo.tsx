import React from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Fovestta HR Software" 
        className="h-10 lg:h-12 w-auto object-contain"
      />
    </div>
  );
}
