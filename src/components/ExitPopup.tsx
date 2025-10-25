import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    let exitIntent = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 10 && !exitIntent) {
        exitIntent = true;
        const hasSeenPopup = sessionStorage.getItem('exitPopupSeen');
        if (!hasSeenPopup) {
          setTimeout(() => setIsOpen(true), 300);
          sessionStorage.setItem('exitPopupSeen', 'true');
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    toast({
      title: 'Спасибо!',
      description: 'Мы перезвоним вам в течение 5 минут',
    });

    setPhone('');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-2xl mx-4 shadow-2xl border-2 border-primary animate-scale-in relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        
        <Button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10"
          variant="ghost"
          size="sm"
        >
          <Icon name="X" size={20} />
        </Button>

        <CardHeader className="text-center pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-pulse-glow">
              <Icon name="Gift" size={40} className="text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Подождите! Специальное предложение!
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Только сегодня — бесплатная консультация + скидка 20% на услуги
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 rounded-lg p-4 text-center border-2 border-green-200">
              <div className="text-3xl mb-2">🎁</div>
              <div className="font-semibold text-green-900">Бесплатная консультация</div>
              <div className="text-sm text-green-700 mt-1">30 минут с юристом</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center border-2 border-blue-200">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-blue-900">Скидка 20%</div>
              <div className="text-sm text-blue-700 mt-1">На все услуги</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center border-2 border-purple-200">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-purple-900">Быстрый ответ</div>
              <div className="text-sm text-purple-700 mt-1">Перезвоним за 5 минут</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Оставьте номер телефона — мы перезвоним
              </label>
              <Input
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-lg"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить скидку 20%
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Акция действует только сегодня. Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>

          <div className="mt-6 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span>2500+ клиентов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
              <span>Рейтинг 4.9</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} className="text-primary" />
              <span>98% успеха</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitPopup;
