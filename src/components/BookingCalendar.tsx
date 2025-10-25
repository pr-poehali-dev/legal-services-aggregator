import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour !== 18) slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  return dates;
};

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const dates = generateDates();
  const timeSlots = generateTimeSlots();
  const bookedSlots = ['10:00', '14:00', '16:30'];

  const formatDate = (date: Date) => {
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: date.toLocaleDateString('ru', { month: 'short' }),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !phone) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Запись успешна!',
      description: `Вы записаны на ${selectedDate.toLocaleDateString('ru')} в ${selectedTime}. Ожидайте звонка для подтверждения.`,
    });

    setSelectedDate(null);
    setSelectedTime(null);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-2xl border-2">
      <CardHeader className="bg-gradient-to-r from-secondary to-orange-600 text-white">
        <CardTitle className="text-3xl flex items-center gap-3">
          <Icon name="Calendar" size={32} />
          Онлайн-запись на консультацию
        </CardTitle>
        <CardDescription className="text-orange-100 text-lg">
          Выберите удобное время для бесплатной консультации с юристом
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
              Выберите дату
            </h3>
            <div className="grid grid-cols-7 gap-2 mb-6">
              {dates.map((date, index) => {
                const { day, date: dateNum, month } = formatDate(date);
                const isSelected = selectedDate?.toDateString() === date.toDateString();
                const isToday = date.toDateString() === new Date().toDateString();
                
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      isSelected
                        ? 'border-secondary bg-secondary/10 shadow-lg'
                        : 'border-slate-200 hover:border-secondary/50'
                    } ${isToday ? 'ring-2 ring-green-500' : ''}`}
                  >
                    <div className="text-xs text-muted-foreground">{day}</div>
                    <div className="text-lg font-bold">{dateNum}</div>
                    <div className="text-xs text-muted-foreground">{month}</div>
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                  Выберите время
                </h3>
                <div className="grid grid-cols-4 gap-2 max-h-[400px] overflow-y-auto pr-2">
                  {timeSlots.map((time) => {
                    const isBooked = bookedSlots.includes(time);
                    const isSelected = selectedTime === time;
                    
                    return (
                      <button
                        key={time}
                        onClick={() => !isBooked && setSelectedTime(time)}
                        disabled={isBooked}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                          isBooked
                            ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                            : isSelected
                            ? 'border-secondary bg-secondary/10 hover:bg-secondary/20'
                            : 'border-slate-200 hover:border-secondary/50 hover:bg-secondary/5'
                        }`}
                      >
                        {time}
                        {isBooked && (
                          <div className="text-xs text-red-500 mt-1">Занято</div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
              Ваши контактные данные
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                <Input
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон *</label>
                <Input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="example@mail.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-secondary/10 rounded-lg p-4 border-2 border-secondary/20 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Вы записываетесь на:</div>
                      <div className="text-sm text-muted-foreground">
                        📅 {selectedDate.toLocaleDateString('ru', { weekday: 'long', day: 'numeric', month: 'long' })}
                        <br />
                        🕐 {selectedTime}
                        <br />
                        💬 Бесплатная консультация (30 минут)
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90"
                disabled={!selectedDate || !selectedTime || !name || !phone}
              >
                <Icon name="Check" size={20} className="mr-2" />
                Подтвердить запись
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Icon name="CheckCircle" size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Консультация абсолютно бесплатна</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Icon name="CheckCircle" size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Перенести или отменить можно в любой момент</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Icon name="CheckCircle" size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>За 2 часа до встречи придёт напоминание</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCalendar;
