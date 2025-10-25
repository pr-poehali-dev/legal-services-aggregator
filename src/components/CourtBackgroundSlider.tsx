import { useState, useEffect } from 'react';

const courtImages = [
  'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=80',
  'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80',
  'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1920&q=80',
  'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1920&q=80'
];

const CourtBackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courtImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {courtImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-blue-900/75 to-blue-950/85 backdrop-blur-[1px]"></div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {courtImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Перейти к изображению ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CourtBackgroundSlider;