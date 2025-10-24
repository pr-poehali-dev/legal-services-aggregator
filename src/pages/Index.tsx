import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    id: 1,
    title: 'Корпоративное право',
    description: 'Регистрация компаний, юридическое сопровождение бизнеса, договоры',
    icon: 'Briefcase',
    features: ['Регистрация ООО/ИП', 'Корпоративные договоры', 'Консультации']
  },
  {
    id: 2,
    title: 'Недвижимость',
    description: 'Сделки с недвижимостью, проверка документов, оформление прав',
    icon: 'Home',
    features: ['Купля-продажа', 'Проверка юридической чистоты', 'Аренда']
  },
  {
    id: 3,
    title: 'Семейное право',
    description: 'Развод, алименты, раздел имущества, опека и усыновление',
    icon: 'Users',
    features: ['Расторжение брака', 'Раздел имущества', 'Алименты']
  },
  {
    id: 4,
    title: 'Трудовое право',
    description: 'Защита прав работников, споры с работодателем, увольнение',
    icon: 'FileText',
    features: ['Трудовые споры', 'Незаконное увольнение', 'Консультации']
  },
  {
    id: 5,
    title: 'Налоговое право',
    description: 'Налоговые споры, проверки, оптимизация налогообложения',
    icon: 'Calculator',
    features: ['Налоговые споры', 'Представительство в ФНС', 'Оптимизация']
  },
  {
    id: 6,
    title: 'Банкротство',
    description: 'Банкротство физических и юридических лиц, защита от кредиторов',
    icon: 'TrendingDown',
    features: ['Банкротство физлиц', 'Банкротство компаний', 'Защита активов']
  }
];

const tariffs = [
  {
    id: 1,
    name: 'Базовый',
    price: '5 000',
    description: 'Для простых вопросов',
    features: [
      'Устная консультация 1 час',
      'Анализ документов до 10 стр.',
      'Письменное заключение',
      'Email поддержка 7 дней'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Стандарт',
    price: '15 000',
    description: 'Оптимальный выбор',
    features: [
      'Консультации без ограничений',
      'Подготовка документов',
      'Представительство в суде 1-й инст.',
      'Поддержка 30 дней',
      'Анализ рисков'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Премиум',
    price: '50 000',
    description: 'Комплексное решение',
    features: [
      'Все из тарифа Стандарт',
      'Представительство во всех инстанциях',
      'Срочное оформление документов',
      'Персональный юрист 24/7',
      'Выезд к клиенту',
      'Гарантия результата'
    ],
    popular: false
  }
];

const reviews = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'Генеральный директор',
    text: 'Отличный сервис! Помогли быстро решить сложный вопрос с контрагентом. Юристы грамотные, всё объяснили понятным языком.',
    rating: 5,
    avatar: 'A'
  },
  {
    id: 2,
    name: 'Дмитрий Петров',
    role: 'Предприниматель',
    text: 'Обратился по вопросу банкротства компании. Провели через всю процедуру, защитили личные активы. Рекомендую!',
    rating: 5,
    avatar: 'Д'
  },
  {
    id: 3,
    name: 'Елена Волкова',
    role: 'Частное лицо',
    text: 'Помогли с разделом имущества при разводе. Всё прошло корректно и без лишних стрессов. Спасибо за профессионализм!',
    rating: 5,
    avatar: 'Е'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={32} className="text-accent" />
            <h1 className="text-2xl font-bold">ЮрАгрегатор</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#tariffs" className="hover:text-accent transition-colors">Тарифы</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button variant="secondary" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            Перезвонить
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">Агрегатор юридических услуг №1</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Решаем юридические вопросы любой сложности
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Найдем лучшего специалиста для вашей задачи. Более 500 проверенных юристов в базе.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="text-lg">
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать юриста
                </Button>
                <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <div className="text-sm text-blue-200">Юристов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">2000+</div>
                  <div className="text-sm text-blue-200">Дел решено</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">98%</div>
                  <div className="text-sm text-blue-200">Успеха</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5d24303f-4263-4937-9a6d-d7c7d73b106d/files/54ef53ac-09be-4f4d-ac1a-7b5570ca7c68.jpg"
                alt="Юридические услуги"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Каталог услуг</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Направления юридической помощи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите нужное направление — мы подберем специалиста с опытом именно в вашей области
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Прозрачное ценообразование</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий пакет услуг. Все цены фиксированы, без скрытых платежей.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={tariff.id}
                className={`relative hover:shadow-xl transition-all animate-fade-in ${
                  tariff.popular ? 'border-primary border-2 shadow-lg scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <CardDescription className="mb-4">{tariff.description}</CardDescription>
                  <div className="text-5xl font-bold text-primary">
                    {tariff.price} ₽
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={tariff.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят о нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы людей, которым мы помогли решить их юридические вопросы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={review.id}
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Свяжитесь с нами</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Получите бесплатную консультацию</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@yuragregator.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">ЮрАгрегатор</h3>
              </div>
              <p className="text-blue-200 text-sm">
                Агрегатор юридических услуг. Находим лучших специалистов для решения ваших задач.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-accent transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Недвижимость</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Семейное право</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Трудовое право</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>+7 (495) 123-45-67</li>
                <li>info@yuragregator.ru</li>
                <li>Пн-Пт: 9:00-21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <div>© 2024 ЮрАгрегатор. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
