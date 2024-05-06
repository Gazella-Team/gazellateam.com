import { useEffect } from 'react';

const Wistia = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/r0o6g4p7ye.jsonp';
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

  useEffect(() => {
    const handleLoad = () => {
      const swatch = document.querySelector('.wistia_swatch');
    };

    const image = new Image();
    image.src = 'https://fast.wistia.com/embed/medias/r0o6g4p7ye/swatch';
    image.onload = handleLoad;

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <div className="wistia_responsive_padding rounded-xl" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <div className="wistia_responsive_wrapper rounded-xl" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
        <div className="rounded-xl wistia_embed wistia_async_r0o6g4p7ye seo=true videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
          <div className="wistia_swatch rounded-xl" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
            <img
              src="https://fast.wistia.com/embed/medias/r0o6g4p7ye/swatch"
              style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
              className='rounded-xl'
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wistia;
