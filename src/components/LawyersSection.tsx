import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const lawyers = [
  {
    id: 1,
    name: 'Мария Соколова',
    position: 'Партнёр, налоговый юрист',
    specialization: 'Налоговое право',
    experience: '15 лет',
    rating: 4.9,
    cases: 350,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    achievements: ['ТОП-5 налоговых юристов РФ', 'Автор 50+ статей'],
    education: 'МГУ им. М.В. Ломоносова',
  },
  {
    id: 2,
    name: 'Алексей Петров',
    position: 'Старший юрист',
    specialization: 'Корпоративное право',
    experience: '12 лет',
    rating: 4.8,
    cases: 280,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop',
    achievements: ['M&A сделки на 2+ млрд ₽', 'Эксперт по IPO'],
    education: 'МГЮА им. О.Е. Кутафина',
  },
  {
    id: 3,
    name: 'Елена Волкова',
    position: 'Юрист по недвижимости',
    specialization: 'Недвижимость',
    experience: '10 лет',
    rating: 5.0,
    cases: 420,
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    achievements: ['100% выигранных дел', 'Член Палаты адвокатов'],
    education: 'СПбГУ',
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    position: 'Судебный юрист',
    specialization: 'Арбитраж',
    experience: '18 лет',
    rating: 4.9,
    cases: 500,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    achievements: ['Более 50 дел в ВС РФ', 'Арбитр МКАС'],
    education: 'МГИМО',
  },
];

const LawyersSection = () => {
  return (
    <section id="lawyers" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-2">Наша команда</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Опытные юристы</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Команда из 500+ профессионалов с опытом от 5 до 25 лет. Средний рейтинг — 4.9 из 5.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {lawyers.map((lawyer, index) => (
            <Card 
              key={lawyer.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-slate-200/60 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={lawyer.image} 
                  alt={lawyer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-bold">{lawyer.rating}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <Badge className="mb-2 bg-primary">{lawyer.specialization}</Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{lawyer.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{lawyer.position}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span>{lawyer.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Briefcase" size={16} className="text-primary" />
                    <span>Опыт: {lawyer.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="FileCheck" size={16} className="text-primary" />
                    <span>{lawyer.cases} успешных дел</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {lawyer.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant="outline">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">И ещё 496+ квалифицированных юристов в нашей базе</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Users" size={20} className="mr-2" />
            Посмотреть всех юристов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LawyersSection;
