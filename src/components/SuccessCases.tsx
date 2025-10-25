import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const cases = [
  {
    id: 1,
    title: 'Взыскание 12 млн ₽ с контрагента',
    category: 'Корпоративное право',
    categoryColor: 'bg-blue-100 text-blue-800',
    icon: 'Building2',
    problem: 'Контрагент не исполнил обязательства по договору поставки на сумму 12 млн рублей. Отказывался от переговоров.',
    solution: 'Подготовили исковое заявление, собрали доказательную базу, представляли интересы в суде 3 инстанций.',
    result: 'Взыскано 12 млн ₽ основного долга + 2,3 млн ₽ процентов и судебных расходов',
    duration: '8 месяцев',
    amount: '14,3 млн ₽',
  },
  {
    id: 2,
    title: 'Списание долгов физлица через банкротство',
    category: 'Банкротство',
    categoryColor: 'bg-orange-100 text-orange-800',
    icon: 'TrendingDown',
    problem: 'Клиент имел долги по кредитам на 4,5 млн рублей. Банки подали иски, грозила потеря единственного жилья.',
    solution: 'Провели процедуру банкротства физического лица, защитили квартиру от реализации, согласовали реструктуризацию.',
    result: 'Списано 4,5 млн ₽ долгов, сохранена квартира стоимостью 6 млн ₽',
    duration: '14 месяцев',
    amount: '4,5 млн ₽',
  },
  {
    id: 3,
    title: 'Отмена штрафа ФНС на 3,8 млн ₽',
    category: 'Налоговое право',
    categoryColor: 'bg-green-100 text-green-800',
    icon: 'Receipt',
    problem: 'ФНС доначислила налоги и штрафы на 3,8 млн рублей по результатам выездной проверки. Требования были необоснованны.',
    solution: 'Подготовили возражения на акт проверки, обжаловали решение в вышестоящем налоговом органе и в суде.',
    result: 'Полная отмена штрафов и доначислений. Компания сэкономила 3,8 млн ₽',
    duration: '6 месяцев',
    amount: '3,8 млн ₽',
  },
];

const SuccessCases = () => {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-2 bg-green-100 text-green-800">Истории успеха</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Реальные кейсы наших клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждое дело уникально. Смотрите, как мы помогли другим — возможно, ваша ситуация похожа
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <Card
              key={caseItem.id}
              className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-blue-100/30 p-8 flex flex-col justify-center items-center border-r-2">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon name={caseItem.icon as any} size={40} className="text-white" />
                  </div>
                  <Badge className={`${caseItem.categoryColor} mb-4 text-sm`}>
                    {caseItem.category}
                  </Badge>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{caseItem.amount}</div>
                    <div className="text-sm text-muted-foreground">Результат</div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    {caseItem.duration}
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl">{caseItem.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <Icon name="AlertCircle" size={16} className="text-red-600" />
                        </div>
                        <h4 className="font-semibold text-lg">Проблема</h4>
                      </div>
                      <p className="text-muted-foreground ml-10">{caseItem.problem}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name="Lightbulb" size={16} className="text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-lg">Решение</h4>
                      </div>
                      <p className="text-muted-foreground ml-10">{caseItem.solution}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                        </div>
                        <h4 className="font-semibold text-lg">Результат</h4>
                      </div>
                      <p className="text-muted-foreground ml-10 font-semibold">{caseItem.result}</p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Хотите такой же результат для своего дела?</p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2">
            <Icon name="ArrowRight" size={20} />
            Получить бесплатную консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
