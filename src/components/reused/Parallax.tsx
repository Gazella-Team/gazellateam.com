import React from 'react';

export default function Parallax({image, height}:{image:string, height:number}) {
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        height: height,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Parallax Effect
        </h1>
      </div>
    </div>
  );
};

