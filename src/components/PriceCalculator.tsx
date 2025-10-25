import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  basePrice: number;
  icon: string;
}

const services: Service[] = [
  { id: 'corporate', name: 'Корпоративное право', basePrice: 50000, icon: 'Building2' },
  { id: 'realestate', name: 'Недвижимость', basePrice: 35000, icon: 'Home' },
  { id: 'family', name: 'Семейное право', basePrice: 25000, icon: 'Heart' },
  { id: 'labor', name: 'Трудовое право', basePrice: 20000, icon: 'Briefcase' },
  { id: 'tax', name: 'Налоговое право', basePrice: 45000, icon: 'Receipt' },
  { id: 'bankruptcy', name: 'Банкротство', basePrice: 60000, icon: 'TrendingDown' },
];

const complexityOptions = [
  { id: 'simple', name: 'Простое', multiplier: 1, desc: 'Типовая ситуация' },
  { id: 'medium', name: 'Среднее', multiplier: 1.5, desc: 'Требует анализа' },
  { id: 'complex', name: 'Сложное', multiplier: 2.5, desc: 'Многоэтапное дело' },
];

const urgencyOptions = [
  { id: 'standard', name: 'Стандартный срок', multiplier: 1, desc: '10-14 дней' },
  { id: 'urgent', name: 'Срочно', multiplier: 1.3, desc: '3-5 дней' },
  { id: 'express', name: 'Экспресс', multiplier: 1.8, desc: '1-2 дня' },
];

const PriceCalculator = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [complexity, setComplexity] = useState(complexityOptions[0]);
  const [urgency, setUrgency] = useState(urgencyOptions[0]);
  const [withCourt, setWithCourt] = useState(false);

  const calculatePrice = () => {
    if (!selectedService) return 0;
    let price = selectedService.basePrice;
    price *= complexity.multiplier;
    price *= urgency.multiplier;
    if (withCourt) price += 30000;
    return Math.round(price);
  };

  const finalPrice = calculatePrice();

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl border-2">
      <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
        <CardTitle className="text-3xl flex items-center gap-3">
          <Icon name="Calculator" size={32} />
          Калькулятор стоимости услуг
        </CardTitle>
        <CardDescription className="text-blue-100 text-lg">
          Рассчитайте предварительную стоимость юридических услуг за 1 минуту
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
            Выберите направление
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  selectedService?.id === service.id
                    ? 'border-primary bg-primary/10 shadow-lg'
                    : 'border-slate-200 hover:border-primary/50'
                }`}
              >
                <Icon name={service.icon as any} size={32} className={selectedService?.id === service.id ? 'text-primary' : 'text-slate-600'} />
                <div className="mt-2 font-medium text-sm">{service.name}</div>
                <div className="text-xs text-muted-foreground mt-1">от {service.basePrice.toLocaleString()} ₽</div>
              </button>
            ))}
          </div>
        </div>

        {selectedService && (
          <>
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Сложность дела
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {complexityOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setComplexity(option)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      complexity.id === option.id
                        ? 'border-primary bg-primary/10'
                        : 'border-slate-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold">{option.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{option.desc}</div>
                    <Badge className="mt-2" variant={complexity.id === option.id ? 'default' : 'outline'}>
                      ×{option.multiplier}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Срочность
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {urgencyOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setUrgency(option)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      urgency.id === option.id
                        ? 'border-primary bg-primary/10'
                        : 'border-slate-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold">{option.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{option.desc}</div>
                    <Badge className="mt-2" variant={urgency.id === option.id ? 'default' : 'outline'}>
                      ×{option.multiplier}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Дополнительно
              </h3>
              <button
                onClick={() => setWithCourt(!withCourt)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 w-full text-left flex items-center justify-between ${
                  withCourt
                    ? 'border-primary bg-primary/10'
                    : 'border-slate-200 hover:border-primary/50'
                }`}
              >
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    <Icon name="Gavel" size={20} />
                    Представительство в суде
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Ведение дела в суде всех инстанций</div>
                </div>
                <div className="text-right">
                  <Badge variant={withCourt ? 'default' : 'outline'}>+30 000 ₽</Badge>
                </div>
              </button>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-6 animate-fade-in border-2 border-primary/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Итоговая стоимость:</div>
                  <div className="text-4xl font-bold text-primary">{finalPrice.toLocaleString()} ₽</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    * Точная стоимость определяется после консультации
                  </div>
                </div>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
