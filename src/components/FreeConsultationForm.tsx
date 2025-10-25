import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const FreeConsultationForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', question: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Заявка отправлена!',
        description: 'Наш юрист свяжется с вами в течение 15 минут',
      });
      setFormData({ name: '', phone: '', question: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="bg-white shadow-2xl border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Icon name="Gift" size={28} />
          Бесплатная консультация
        </CardTitle>
        <CardDescription className="text-blue-100">
          Получите ответ на ваш вопрос за 15 минут — совершенно бесплатно
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Ваше имя</label>
            <Input
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Номер телефона</label>
            <Input
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Ваш вопрос</label>
            <Textarea
              placeholder="Опишите кратко вашу ситуацию..."
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              required
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} className="mr-2" />
                Получить консультацию
              </>
            )}
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Lock" size={14} />
            <span>Ваши данные защищены и не передаются третьим лицам</span>
          </div>
        </form>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
          <div className="text-center">
            <Icon name="Clock" size={24} className="mx-auto text-primary mb-2" />
            <div className="text-xs font-semibold">15 минут</div>
            <div className="text-xs text-muted-foreground">Время ответа</div>
          </div>
          <div className="text-center">
            <Icon name="Shield" size={24} className="mx-auto text-primary mb-2" />
            <div className="text-xs font-semibold">100% бесплатно</div>
            <div className="text-xs text-muted-foreground">Никаких скрытых платежей</div>
          </div>
          <div className="text-center">
            <Icon name="Users" size={24} className="mx-auto text-primary mb-2" />
            <div className="text-xs font-semibold">500+ юристов</div>
            <div className="text-xs text-muted-foreground">В нашей базе</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreeConsultationForm;
