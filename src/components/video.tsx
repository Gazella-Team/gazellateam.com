// components/VideoPlayer.tsx
import { useState } from 'react';

interface VideoPlayerProps {
  thumbnail: string;
  videoSrc: string;
}

import React, { useEffect } from 'react';

const WistiaEmbed = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/9j67mfrz2c.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className='flex items-center justify-center'>
      <div className="wistia_responsive_padding w-[1000px]">
        <div className="wistia_responsive_wrapper">
          <div className="wistia_embed wistia_async_9j67mfrz2c seo=true videoFoam=true">
            <div className="wistia_swatch" style={{  opacity: 0, overflow: 'hidden',  transition: 'opacity 200ms', }}>
              <img src="https://fast.wistia.com/embed/medias/9j67mfrz2c/swatch"  alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WistiaEmbed;
