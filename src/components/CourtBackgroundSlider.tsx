import { useState, useEffect } from 'react';

const courtImages = [
  {
    url: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=80',
    title: 'Верховный Суд',
    subtitle: 'Высшая судебная инстанция'
  },
  {
    url: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80',
    title: 'Арбитражный Суд',
    subtitle: 'Разрешение экономических споров'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    title: 'Городской Суд',
    subtitle: 'Гражданские и уголовные дела'
  },
  {
    url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80',
    title: 'Конституционный Суд',
    subtitle: 'Защита конституционных прав'
  },
  {
    url: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1920&q=80',
    title: 'Районный Суд',
    subtitle: 'Суды общей юрисдикции'
  },
  {
    url: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1920&q=80',
    title: 'Апелляционный Суд',
    subtitle: 'Пересмотр судебных решений'
  }
];

const CourtBackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courtImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="absolute inset-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {courtImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-blue-900/75 to-blue-950/85 backdrop-blur-[1px]"></div>
      
      <div className={`absolute top-8 left-8 z-20 transition-all duration-500 ${
        currentIndex !== null ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-4 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
            {courtImages[currentIndex].title}
          </h3>
          <p className="text-sm md:text-base text-blue-100">
            {courtImages[currentIndex].subtitle}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full">
        {courtImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60 w-3'
            }`}
            aria-label={`Перейти к изображению ${index + 1}`}
          />
        ))}
        {isPaused && (
          <div className="ml-2 text-white/80 text-xs font-medium">
            Пауза
          </div>
        )}
      </div>
    </div>
  );
};

export default CourtBackgroundSlider;