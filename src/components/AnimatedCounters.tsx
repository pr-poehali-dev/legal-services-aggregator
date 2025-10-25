import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Counter {
  id: number;
  value: number;
  label: string;
  icon: string;
  suffix?: string;
  prefix?: string;
}

const counters: Counter[] = [
  { id: 1, value: 2500, label: 'Успешных дел', icon: 'TrendingUp', suffix: '+' },
  { id: 2, value: 500, label: 'Юристов в базе', icon: 'Users', suffix: '+' },
  { id: 3, value: 98, label: 'Выигранных дел', icon: 'Award', suffix: '%' },
  { id: 4, value: 15, label: 'Лет опыта', icon: 'Calendar', suffix: '' },
  { id: 5, value: 24, label: 'Часа поддержка', icon: 'Clock', suffix: '/7' },
  { id: 6, value: 4.9, label: 'Средний рейтинг', icon: 'Star', suffix: '/5' },
];

const useCountUp = (end: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return count;
};

const AnimatedCounters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Мы в цифрах</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Статистика, которая говорит сама за себя
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {counters.map((counter, index) => {
            const count = useCountUp(counter.value, 2000, isVisible);
            const displayValue = counter.value % 1 !== 0 ? count.toFixed(1) : count;

            return (
              <Card
                key={counter.id}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={counter.icon as any} size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 font-mono">
                    {counter.prefix}
                    {displayValue}
                    {counter.suffix}
                  </div>
                  <div className="text-sm text-blue-100">{counter.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold">🏆</div>
            <div className="text-3xl font-bold">ТОП-3</div>
            <div className="text-blue-100">Юридический сервис России по версии Forbes</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">💼</div>
            <div className="text-3xl font-bold">5+ млрд ₽</div>
            <div className="text-blue-100">Взыскано для клиентов за 2024 год</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">⚖️</div>
            <div className="text-3xl font-bold">1200+</div>
            <div className="text-blue-100">Дел в Верховном Суде РФ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;
