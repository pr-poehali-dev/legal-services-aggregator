import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import AnimatedBackground from '@/components/AnimatedBackground';
import OnlineConsultant from '@/components/OnlineConsultant';

const services = [
  {
    id: 1,
    title: 'Корпоративное право',
    description: 'Полное юридическое сопровождение бизнеса от регистрации до банкротства',
    icon: 'Building2',
    features: ['Регистрация бизнеса', 'Корпоративные споры', 'M&A сделки', 'Due Diligence']
  },
  {
    id: 2,
    title: 'Недвижимость',
    description: 'Безопасные сделки с недвижимостью под ключ',
    icon: 'Home',
    features: ['Купля-продажа', 'Проверка юридической чистоты', 'Сопровождение сделок', 'Споры по недвижимости']
  },
  {
    id: 3,
    title: 'Семейное право',
    description: 'Деликатное решение семейных споров',
    icon: 'Heart',
    features: ['Расторжение брака', 'Раздел имущества', 'Алименты', 'Опека и усыновление']
  },
  {
    id: 4,
    title: 'Трудовое право',
    description: 'Защита прав работников и работодателей',
    icon: 'Briefcase',
    features: ['Трудовые споры', 'Увольнение', 'Взыскание зарплаты', 'Кадровый аудит']
  },
  {
    id: 5,
    title: 'Налоговое право',
    description: 'Сопровождение налоговых проверок и оптимизация',
    icon: 'Receipt',
    features: ['Налоговые споры', 'Защита в ФНС', 'Возврат налогов', 'Налоговая оптимизация']
  },
  {
    id: 6,
    title: 'Банкротство',
    description: 'Полное сопровождение процедуры банкротства',
    icon: 'TrendingDown',
    features: ['Банкротство физлиц', 'Банкротство юрлиц', 'Защита от кредиторов', 'Реструктуризация долгов']
  },
  {
    id: 7,
    title: 'Споры с ЖКХ',
    description: 'Защита прав потребителей коммунальных услуг',
    icon: 'Droplets',
    features: ['Перерасчёт платежей', 'Незаконные начисления', 'Качество услуг', 'Возврат переплат']
  },
  {
    id: 8,
    title: 'Административные правонарушения',
    description: 'Защита от штрафов и административной ответственности',
    icon: 'ShieldAlert',
    features: ['Обжалование штрафов ГИБДД', 'Защита по КоАП РФ', 'Административный арест', 'Лишение прав']
  }
];

const tariffs = [
  {
    id: 1,
    name: 'Консультация',
    price: 'от 3 000',
    period: 'за час',
    description: 'Быстрый ответ на простой вопрос',
    features: [
      'Устная консультация',
      'Анализ документов до 5 стр.',
      'Рекомендации по действиям',
      'Email поддержка 3 дня'
    ],
    popular: false,
    icon: 'MessageSquare'
  },
  {
    id: 2,
    name: 'Комплексное решение',
    price: 'от 25 000',
    period: 'за кейс',
    description: 'Ведение дела от А до Я',
    features: [
      'Неограниченные консультации',
      'Подготовка всех документов',
      'Представительство в судах',
      'Поддержка до решения вопроса',
      'Стратегия защиты интересов',
      'Контроль сроков'
    ],
    popular: true,
    icon: 'Award'
  },
  {
    id: 3,
    name: 'Абонентское обслуживание',
    price: 'от 15 000',
    period: 'в месяц',
    description: 'Постоянная юридическая поддержка',
    features: [
      'Персональный юрист 24/7',
      'Проверка всех договоров',
      'Участие в переговорах',
      'Срочные консультации',
      'Представительство интересов',
      'Кадровое сопровождение'
    ],
    popular: false,
    icon: 'Shield'
  }
];

const reviews = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'ГД торговой компании',
    text: 'Выиграли спор с контрагентом на 12 млн рублей. Юристы работали четко, держали в курсе каждого этапа. Очень благодарна!',
    rating: 5,
    company: 'ООО "ТоргСнаб"'
  },
  {
    id: 2,
    name: 'Михаил Петров',
    role: 'Частный предприниматель',
    text: 'Прошли процедуру банкротства физлица. Списали 4,5 млн долгов, сохранили квартиру. Сервис на высоте!',
    rating: 5,
    company: 'ИП'
  },
  {
    id: 3,
    name: 'Елена Волкова',
    role: 'Директор по развитию',
    text: 'Подключили абонентское обслуживание — теперь спим спокойно. Все договоры проверены, риски минимизированы.',
    rating: 5,
    company: 'ООО "ИнноТех"'
  }
];

const stats = [
  { value: '500+', label: 'Проверенных юристов', icon: 'Users' },
  { value: '2 500+', label: 'Выигранных дел', icon: 'Trophy' },
  { value: '98%', label: 'Довольных клиентов', icon: 'ThumbsUp' },
  { value: '24/7', label: 'Поддержка клиентов', icon: 'Clock' }
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-text');
    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка принята!',
      description: 'Наш специалист свяжется с вами в течение 15 минут.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <header 
        className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm transition-all duration-300"
        style={{ 
          backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          boxShadow: scrollY > 50 ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">ЮрПомощь</div>
                <p className="text-xs text-muted-foreground">Агрегатор юридических услуг</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6" aria-label="Основная навигация">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium" aria-label="Перейти к разделу Услуги">Услуги</a>
              <a href="#tariffs" className="text-foreground hover:text-primary transition-colors font-medium" aria-label="Перейти к разделу Тарифы">Тарифы</a>
              <a href="#cases" className="text-foreground hover:text-primary transition-colors font-medium" aria-label="Перейти к разделу Судебная практика">Практика</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium" aria-label="Перейти к разделу Вопросы">FAQ</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium" aria-label="Перейти к разделу Контакты">Контакты</a>
            </nav>
            <Button className="hidden md:flex" aria-label="Заказать обратный звонок от юриста">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-blue-900 animate-gradient"></div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl animate-float animate-pulse-glow"></div>
          <div className="absolute bottom-10 right-20 w-[600px] h-[600px] bg-accent rounded-full blur-3xl animate-float-reverse animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-yellow-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-blue-300 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '6s' }}></div>
          
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full animate-particle opacity-60"
              style={{
                left: `${5 + i * 6}%`,
                top: `${15 + (i % 5) * 15}%`,
                animationDelay: `${i * 1.5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-secondary text-white border-0 text-base px-4 py-2">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Агрегатор юридических услуг #1 в России
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Найдем лучшего юриста для вашей задачи за 15 минут
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
                Подбираем проверенных специалистов из базы 500+ юристов. 
                Бесплатная консультация и гарантия результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg h-14 px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти юриста бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-white text-white hover:bg-white/10">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать презентацию
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="animate-fade-in transition-transform duration-300 hover:scale-110" 
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: `translateY(${scrollY * (0.02 + index * 0.01)}px)`
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={stat.icon as any} size={20} className="text-secondary" />
                      <div className="text-3xl font-bold">{stat.value}</div>
                    </div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div 
                className="relative"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
                  alt="Юридические услуги"
                  className="relative rounded-3xl shadow-2xl w-full animate-scale-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ transform: 'translate(-50%, -50%)', animationDelay: '5s' }}></div>
          
          <div className="absolute top-10 left-1/3 w-40 h-40 border-4 border-primary/30 rounded-lg animate-rotate-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 border-4 border-secondary/30 rounded-full animate-rotate-slow" style={{ animationDelay: '5s' }}></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 reveal-text">Направления работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-text stagger-1">Юридические услуги по всем отраслям права</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-text stagger-2">
              В нашей базе более 500 юристов с опытом от 5 лет. Подберем специалиста 
              под вашу задачу с учетом специализации и региона.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary bg-white/95 backdrop-blur-sm shadow-xl reveal-text stagger-${(index % 6) + 1}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon as any} size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                    Подобрать юриста
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 reveal-text">Судебная практика</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-text stagger-1">Актуальные решения судов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-text stagger-2">
              Важные прецеденты 2024-2025 года, которые меняют правоприменительную практику
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 bg-white/95 backdrop-blur-sm shadow-xl border-2 hover:border-primary reveal-text stagger-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    <Icon name="Gavel" size={14} className="mr-1" />
                    Верховный Суд РФ
                  </Badge>
                  <span className="text-sm text-muted-foreground">Октябрь 2024</span>
                </div>
                <CardTitle className="text-xl mb-3">Возврат страховки по кредиту: новые правила</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Определение № 5-КГ24-75-К2. ВС РФ признал незаконным отказ банков возвращать страховку 
                  при досрочном погашении кредита. Теперь заёмщики могут вернуть неиспользованную часть 
                  страховой премии пропорционально оставшемуся сроку договора.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-amber-900 mb-1">Практическое значение:</p>
                  <p className="text-sm text-amber-800">
                    Если вы досрочно погасили кредит — требуйте возврат страховки. 
                    Срок обращения — 3 года с даты погашения.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Читать полный текст решения
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 bg-white/95 backdrop-blur-sm shadow-xl border-2 hover:border-primary reveal-text stagger-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <Icon name="Gavel" size={14} className="mr-1" />
                    Конституционный Суд РФ
                  </Badge>
                  <span className="text-sm text-muted-foreground">Сентябрь 2024</span>
                </div>
                <CardTitle className="text-xl mb-3">Защита прав дольщиков усилена</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Постановление № 35-П. КС РФ обязал застройщиков выплачивать неустойку за просрочку 
                  передачи квартиры, даже если дом введён в эксплуатацию. Размер — 1/300 ставки ЦБ 
                  от цены договора за каждый день просрочки.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-blue-900 mb-1">Практическое значение:</p>
                  <p className="text-sm text-blue-800">
                    Дольщики теперь могут требовать компенсацию за каждый день задержки, 
                    независимо от причин. Средняя выплата — от 150 000 до 500 000 ₽.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Читать полный текст решения
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 bg-white/95 backdrop-blur-sm shadow-xl border-2 hover:border-primary reveal-text stagger-3">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Icon name="Gavel" size={14} className="mr-1" />
                    Верховный Суд РФ
                  </Badge>
                  <span className="text-sm text-muted-foreground">Август 2024</span>
                </div>
                <CardTitle className="text-xl mb-3">Трудовые споры: запись разговора как доказательство</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Определение № 18-КГ24-52. Суд признал аудиозаписи разговоров с работодателем 
                  допустимым доказательством по трудовым спорам. Теперь работники могут использовать 
                  записи для подтверждения незаконного увольнения или невыплаты зарплаты.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-green-900 mb-1">Практическое значение:</p>
                  <p className="text-sm text-green-800">
                    Записывайте переговоры с работодателем о зарплате, условиях труда, увольнении. 
                    Это может стать ключевым доказательством в суде.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Читать полный текст решения
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 bg-white/95 backdrop-blur-sm shadow-xl border-2 hover:border-primary reveal-text stagger-4">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    <Icon name="Gavel" size={14} className="mr-1" />
                    Арбитражный Суд
                  </Badge>
                  <span className="text-sm text-muted-foreground">Июль 2024</span>
                </div>
                <CardTitle className="text-xl mb-3">Налоговые проверки: новые ограничения для ФНС</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Постановление № А40-287456/2023. Суд запретил ФНС требовать документы, 
                  не относящиеся к проверяемому периоду. Налоговая обязана чётко обосновать 
                  необходимость каждого запрашиваемого документа.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-purple-900 mb-1">Практическое значение:</p>
                  <p className="text-sm text-purple-800">
                    Бизнес может законно отказать ФНС в предоставлении документов, 
                    не связанных с проверкой. Это снижает риск "рыболовной экспедиции".
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Читать полный текст решения
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4 reveal-text stagger-5">
            <Button size="lg" className="text-base mr-4">
              <Icon name="Scale" size={18} className="mr-2" />
              Смотреть всю судебную практику
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-6 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-40 left-20 w-[450px] h-[450px] bg-accent rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-20 w-[450px] h-[450px] bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '6s' }}></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 reveal-text">Прозрачные цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-text stagger-1">Выберите формат сотрудничества</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-text stagger-2">
              Фиксированная стоимость без скрытых платежей. Первая консультация — бесплатно.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={tariff.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-white/95 backdrop-blur-sm reveal-text stagger-${index + 3} ${
                  tariff.popular 
                    ? 'border-4 border-primary shadow-2xl scale-105' 
                    : 'border-2 hover:border-primary hover:shadow-xl shadow-lg'
                }`}
              >
                {tariff.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-2 text-sm font-bold">
                    <Icon name="Star" size={16} className="inline mr-1" />
                    ХИТ ПРОДАЖ
                  </div>
                )}
                <CardHeader className={tariff.popular ? 'pt-12' : ''}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={tariff.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-primary">{tariff.price}</span>
                    <span className="text-muted-foreground ml-2">{tariff.period}</span>
                  </div>
                  <CardDescription className="text-base">{tariff.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full text-base h-12"
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    {tariff.popular ? (
                      <>
                        <Icon name="Zap" size={18} className="mr-2" />
                        Выбрать тариф
                      </>
                    ) : (
                      'Узнать подробнее'
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Нужен индивидуальный расчет?</p>
            <Button size="lg" variant="outline" className="text-base">
              <Icon name="Calculator" size={18} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '5s' }}></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 reveal-text">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-text stagger-1">Что говорят о нас клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-text stagger-2">
              Более 2 500 успешно решенных дел. Средняя оценка — 4.9 из 5.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={review.id} 
                className={`hover:shadow-xl transition-all duration-300 border-2 reveal-text stagger-${index + 3}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.role}</div>
                        <div className="text-xs text-muted-foreground">{review.company}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="text-base">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Читать все отзывы (247)
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-blue-900 animate-gradient"></div>
        
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-yellow-300 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '6s' }}></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-secondary text-white border-0 text-base px-4 py-2 reveal-text">
                Бесплатная консультация
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-text stagger-1">
                Получите консультацию юриста прямо сейчас
              </h2>
              <p className="text-xl text-blue-50 mb-8 reveal-text stagger-2">
                Оставьте заявку — мы перезвоним в течение 15 минут, 
                проанализируем вашу ситуацию и предложим решение.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 reveal-text stagger-3">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Быстрый ответ</div>
                    <div className="text-blue-100">Перезваниваем за 15 минут</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 reveal-text stagger-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Конфиденциальность</div>
                    <div className="text-blue-100">Ваши данные под защитой</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 reveal-text stagger-5">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Gift" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Бесплатная консультация</div>
                    <div className="text-blue-100">Первичный разбор ситуации бесплатно</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-2xl reveal-text stagger-2">
              <CardHeader>
                <CardTitle className="text-2xl">Заявка на консультацию</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email (необязательно)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 reveal-text">Частые вопросы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-text stagger-1">Ответы на популярные вопросы</h2>
            <p className="text-xl text-muted-foreground reveal-text stagger-2">
              Собрали самые частые вопросы клиентов
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-muted/30 rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors reveal-text stagger-1">
              <summary className="flex items-center justify-between font-semibold text-lg">
                <span>Сколько стоит консультация юриста?</span>
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Первичная консультация (30 минут) — бесплатно. Стандартная консультация — от 3 000 ₽. 
                Стоимость дальнейшего сопровождения зависит от сложности дела и выбранного тарифа. 
                Предлагаем абонентское обслуживание от 15 000 ₽/месяц для бизнеса.
              </p>
            </details>

            <details className="group bg-muted/30 rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors reveal-text stagger-2">
              <summary className="flex items-center justify-between font-semibold text-lg">
                <span>Как быстро можно получить консультацию?</span>
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Подбираем юриста в течение 2 часов после обращения. Экстренная консультация возможна 
                в день обращения. Работаем круглосуточно, включая выходные и праздники.
              </p>
            </details>

            <details className="group bg-muted/30 rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors reveal-text stagger-3">
              <summary className="flex items-center justify-between font-semibold text-lg">
                <span>Какие документы нужны для консультации?</span>
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Для первичной консультации документы не обязательны — достаточно описать ситуацию. 
                Юрист подскажет, какие документы потребуются для дальнейшей работы. Все документы 
                можно передать в электронном виде через личный кабинет.
              </p>
            </details>

            <details className="group bg-muted/30 rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors reveal-text stagger-4">
              <summary className="flex items-center justify-between font-semibold text-lg">
                <span>Работаете ли вы полностью онлайн?</span>
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Да, мы работаем полностью дистанционно: консультации по видеосвязи, документы через 
                электронную подпись, оплата онлайн. При необходимости юрист может встретиться лично 
                или представлять интересы в суде.
              </p>
            </details>

            <details className="group bg-muted/30 rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors reveal-text stagger-5">
              <summary className="flex items-center justify-between font-semibold text-lg">
                <span>Гарантируете ли вы результат?</span>
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Мы гарантируем профессиональный подход и добросовестную работу. Результат в юридических 
                делах зависит от многих факторов, но мы делаем всё возможное для победы. 98% наших 
                клиентов довольны результатом работы. Предоставляем юридическую гарантию на оказанные услуги.
              </p>
            </details>

            <details className="group bg-muted/30 rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors reveal-text stagger-6">
              <summary className="flex items-center justify-between font-semibold text-lg">
                <span>Как происходит оплата услуг?</span>
                <Icon name="ChevronDown" size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Принимаем оплату банковскими картами, электронными деньгами, по безналичному расчёту для 
                юридических лиц. Возможна оплата по этапам работы. Предоставляем полный пакет документов 
                для отчётности (договор, акт, счёт).
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Scale" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ЮрПомощь</h3>
                  <p className="text-xs text-gray-400">Агрегатор юр. услуг</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Лучшие юристы России в одном месте
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Недвижимость</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Семейное право</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Банкротство</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-white transition-colors">8 800 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@jurhelp.ru" className="hover:text-white transition-colors">info@jurhelp.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Работаем по всей России</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 ЮрПомощь. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>

      <OnlineConsultant />
    </div>
  );
}