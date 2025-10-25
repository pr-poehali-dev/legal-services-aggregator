import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function OnlineConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; time: string }>>([
    {
      text: 'Здравствуйте! Я онлайн-консультант. Чем могу помочь?',
      isUser: false,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const quickQuestions = [
    'Сколько стоит консультация?',
    'Как быстро можно начать работу?',
    'Какие документы нужны?',
    'Работаете ли онлайн?'
  ];

  const responses: { [key: string]: string } = {
    'сколько стоит': 'Первичная консультация — бесплатно (30 минут). Стандартная консультация — от 3 000 ₽. Абонентское обслуживание — от 15 000 ₽/месяц.',
    'как быстро': 'Мы подбираем юриста в течение 2 часов после обращения. Первая консультация возможна уже сегодня!',
    'документы': 'Для первичной консультации документы не нужны. Расскажите о ситуации — юрист подскажет, что потребуется.',
    'онлайн': 'Да, мы работаем полностью онлайн: консультации по видеосвязи, документы через электронную подпись, оплата онлайн.',
    'default': 'Спасибо за вопрос! Наш специалист свяжется с вами в ближайшее время для подробной консультации.'
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputMessage.trim();
    if (!messageText) return;

    const newMessage = {
      text: messageText,
      isUser: true,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      let response = responses.default;

      for (const [key, value] of Object.entries(responses)) {
        if (lowerText.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages(prev => [...prev, {
        text: response,
        isUser: false,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform duration-300 animate-pulse"
          size="lg"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] shadow-2xl z-50 flex flex-col border-2 border-primary">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Icon name="Scale" size={20} className="text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">Онлайн-консультант</CardTitle>
                  <div className="flex items-center gap-1 text-xs text-white/90">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Онлайн</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    msg.isUser
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white border border-border rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.isUser ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-border rounded-2xl rounded-bl-none px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {messages.length <= 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-muted-foreground text-center mb-2">Частые вопросы:</p>
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start text-xs h-auto py-2"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>

          <div className="p-4 bg-white border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Напишите ваш вопрос..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!inputMessage.trim()}>
                <Icon name="Send" size={18} />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
}
