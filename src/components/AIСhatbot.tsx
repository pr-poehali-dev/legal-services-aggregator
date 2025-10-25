import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickQuestions = [
  'Сколько стоит консультация?',
  'Как подать на развод?',
  'Как взыскать долг?',
  'Трудовые споры',
];

const botResponses: Record<string, string> = {
  'консультация': 'Первичная консультация (30 минут) - бесплатно! Стандартная консультация от 3000₽. Могу записать вас на удобное время.',
  'развод': 'Развод через ЗАГС - от 15000₽ (1-2 месяца). Через суд - от 25000₽ (2-4 месяца). Расскажите подробнее о вашей ситуации?',
  'долг': 'Взыскание долга: досудебная работа 10000₽, судебное взыскание от 20000₽ + 10% от взысканной суммы. Какая сумма долга?',
  'трудовые': 'Трудовые споры: консультация бесплатно, иск в суд от 15000₽. Успешно решаем 92% дел. Что случилось?',
  'привет': 'Здравствуйте! Я ИИ-помощник юридического сервиса. Помогу ответить на вопросы и подберу специалиста. Что вас интересует?',
  'цена': 'Цены зависят от сложности дела. Используйте калькулятор на сайте или запишитесь на бесплатную консультацию.',
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Здравствуйте! Я ИИ-ассистент. Задайте юридический вопрос или выберите тему ниже 👇',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowercaseMessage.includes(key)) {
        return response;
      }
    }
    
    return 'Интересный вопрос! Для точного ответа рекомендую бесплатную консультацию с юристом. Записать вас?';
  };

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-5 shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Открыть чат-бота"
      >
        <Icon name="Bot" size={28} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          ИИ-помощник
        </span>
        <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75"></div>
      </button>
    );
  }

  return (
    <Card className="fixed bottom-6 left-6 z-50 w-[400px] h-[600px] shadow-2xl flex flex-col animate-fade-in border-2 border-purple-200">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="Bot" size={24} />
          </div>
          <div>
            <CardTitle className="text-lg">ИИ-Ассистент</CardTitle>
            <div className="text-xs text-purple-100 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Онлайн
            </div>
          </div>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20"
        >
          <Icon name="X" size={20} />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-100 text-slate-900'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-slate-100 rounded-2xl px-4 py-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSend(question)}
              className="text-xs px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full transition-colors duration-200 border border-purple-200"
            >
              {question}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Напишите ваш вопрос..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            onClick={() => handleSend()}
            className="bg-purple-500 hover:bg-purple-600"
            disabled={!inputValue.trim()}
          >
            <Icon name="Send" size={20} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChatbot;