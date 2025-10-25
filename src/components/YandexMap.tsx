import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ymaps: any;
  }
}

interface YandexMapProps {
  center?: [number, number];
  zoom?: number;
  height?: string;
}

const YandexMap = ({ 
  center = [55.761480, 37.614841], 
  zoom = 16,
  height = '400px'
}: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadYandexMap = () => {
      if (window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          if (!mapInstanceRef.current) {
            const map = new window.ymaps.Map(mapRef.current, {
              center: center,
              zoom: zoom,
              controls: ['zoomControl', 'fullscreenControl']
            });

            const placemark = new window.ymaps.Placemark(
              center,
              {
                balloonContentHeader: 'ЮрПомощь',
                balloonContentBody: 'Тверская улица, 12<br>Москва, 125009',
                balloonContentFooter: 'Работаем 24/7',
                hintContent: 'ЮрПомощь — Юридические услуги'
              },
              {
                preset: 'islands#blueGovernmentCircleIcon',
                iconColor: '#1e40af'
              }
            );

            map.geoObjects.add(placemark);
            mapInstanceRef.current = map;
          }
        });
      }
    };

    if (!document.getElementById('yandex-maps-script')) {
      const script = document.createElement('script');
      script.id = 'yandex-maps-script';
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
      script.async = true;
      script.onload = loadYandexMap;
      document.head.appendChild(script);
    } else {
      loadYandexMap();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom]);

  return (
    <div 
      ref={mapRef} 
      style={{ width: '100%', height }}
      className="rounded-lg overflow-hidden shadow-lg"
    />
  );
};

export default YandexMap;
