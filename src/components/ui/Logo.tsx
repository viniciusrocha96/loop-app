import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <img
        src="/logo.png"
        alt="LOOP Logo"
        className="w-full h-auto object-cover scale-[1.3] md:scale-[1.5] origin-top"
      />
    </div>
  );
}
