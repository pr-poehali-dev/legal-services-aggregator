import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  icon: string;
}

const Counter = ({ end, duration = 2000, suffix = '', label, icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center w-full">
      <div className="mb-4 flex justify-center">
        <div className="transition-transform duration-300 hover:scale-125">
          <Icon name={icon as any} size={48} className="text-primary" />
        </div>
      </div>
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count.toLocaleString('ru')}{suffix}
      </div>
      <div className="text-lg text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const StatsCounters = () => {
  const counters = [
    { end: 500, suffix: '+', label: 'Юристов в базе', icon: 'Users' },
    { end: 2500, suffix: '+', label: 'Выигранных дел', icon: 'Trophy' },
    { end: 98, suffix: '%', label: 'Довольных клиентов', icon: 'ThumbsUp' },
    { end: 15, suffix: ' млн ₽', label: 'Средняя сумма взыскания', icon: 'TrendingUp' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши достижения в цифрах</h2>
          <p className="text-xl text-muted-foreground">Результаты, которым доверяют тысячи клиентов</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border-2 border-primary/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 py-12 px-6"
            >
              <Counter {...counter} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center flex flex-col items-center justify-center">
          <p className="text-muted-foreground mb-6 text-lg">Присоединяйтесь к тысячам довольных клиентов</p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2">
            <Icon name="Rocket" size={20} />
            Начать работу с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsCounters;