import Icon from '@/components/ui/icon';

const MessengerButtons = () => {
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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-end gap-3">
      <div className="flex flex-col gap-3">
        {messengers.map((messenger) => (
          <a
            key={messenger.name}
            href={messenger.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${messenger.color} text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-2 group opacity-70 hover:opacity-100`}
            aria-label={`Связаться через ${messenger.name}`}
          >
            <Icon name={messenger.icon as any} size={24} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
              {messenger.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MessengerButtons;
