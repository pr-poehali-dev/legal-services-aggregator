import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'Генеральный директор',
    company: 'ООО "ТоргСнаб"',
    text: 'Выиграли спор с контрагентом на 12 млн рублей. Юристы работали четко, держали в курсе каждого этапа. Очень благодарна за профессионализм!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    date: 'Октябрь 2024',
  },
  {
    id: 2,
    name: 'Михаил Петров',
    role: 'Предприниматель',
    company: 'ИП Петров М.И.',
    text: 'Прошли процедуру банкротства физлица. Списали 4,5 млн долгов, сохранили квартиру. Сервис на высоте, всё прозрачно и понятно!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    date: 'Сентябрь 2024',
  },
  {
    id: 3,
    name: 'Елена Волкова',
    role: 'Директор по развитию',
    company: 'ООО "ИнноТех"',
    text: 'Подключили абонентское обслуживание — теперь спим спокойно. Все договоры проверены, риски минимизированы. Рекомендую!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    date: 'Август 2024',
  },
  {
    id: 4,
    name: 'Дмитрий Соколов',
    role: 'Собственник бизнеса',
    company: 'Сеть ресторанов "Вкусно"',
    text: 'Помогли решить сложный трудовой спор. Профессионально, быстро, с учетом всех нюансов бизнеса. Буду обращаться ещё!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    date: 'Июль 2024',
  },
  {
    id: 5,
    name: 'Ольга Кузнецова',
    role: 'Частное лицо',
    company: 'Физическое лицо',
    text: 'Развод через суд с разделом имущества. Всё сделали быстро и справедливо. Юрист был на связи 24/7, поддерживал морально.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    date: 'Июнь 2024',
  },
  {
    id: 6,
    name: 'Александр Морозов',
    role: 'Руководитель отдела',
    company: 'ООО "СтройГрупп"',
    text: 'Сопровождали сделку по покупке коммерческой недвижимости. Выявили скрытые риски, которые могли стоить миллионы. Спасибо!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    date: 'Май 2024',
  },
];

const ReviewsWithPhotos = () => {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-2">Отзывы клиентов</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Что говорят о нас клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 2 500 успешно решенных дел. Средняя оценка — 4.9 из 5.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:-translate-y-2 bg-white"
            >
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-lg">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    <div className="text-xs text-muted-foreground">{review.company}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2">
            <Icon name="MessageCircle" size={20} />
            Читать все отзывы (247)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsWithPhotos;