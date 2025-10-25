import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FloatingMessengers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const messengers = [
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'bg-green-500 hover:bg-green-600',
      link: 'https://wa.me/79001234567?text=Здравствуйте! Хочу получить консультацию юриста',
    },
    {
      name: 'Telegram',
      icon: 'Send',
      color: 'bg-blue-500 hover:bg-blue-600',
      link: 'https://t.me/yourcompany',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {messengers.map((messenger, index) => (
            <a
              key={messenger.name}
              href={messenger.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${messenger.color} text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-2 group`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <Icon name={messenger.icon as any} size={24} />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
                {messenger.name}
              </span>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
        } text-white rounded-full p-5 shadow-2xl transition-all duration-300 hover:scale-110 relative group`}
        aria-label="Открыть мессенджеры"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        {isOpen ? (
          <Icon name="X" size={28} className="transition-transform duration-300" />
        ) : (
          <>
            <Icon name="MessageSquare" size={28} className="transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
          </>
        )}
        <span className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Написать нам
        </span>
      </button>
    </div>
  );
};

export default FloatingMessengers;
