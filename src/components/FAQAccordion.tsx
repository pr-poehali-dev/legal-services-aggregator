import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    id: 1,
    question: 'Сколько стоит первая консультация?',
    answer: 'Первая консультация длительностью 30 минут — совершенно бесплатно. На ней юрист оценит вашу ситуацию, расскажет о возможных вариантах решения и озвучит стоимость дальнейших услуг.',
  },
  {
    id: 2,
    question: 'Как быстро можно получить консультацию?',
    answer: 'Мы перезваниваем в течение 15 минут после заявки. Онлайн-консультацию можно провести в тот же день. Личная встреча в офисе — в удобное для вас время, обычно на следующий день.',
  },
  {
    id: 3,
    question: 'Работаете ли вы с регионами?',
    answer: 'Да, мы работаем по всей России. Онлайн-консультации проводим через Zoom или Телеграм. Документы можем отправить курьерской службой или электронной почтой. В суд выезжаем лично или работаем через местных партнёров.',
  },
  {
    id: 4,
    question: 'Какие гарантии, что дело выиграем?',
    answer: 'Мы не даём 100% гарантию победы — это запрещено адвокатской этикой. Но мы честно оцениваем перспективы дела на первой консультации и берёмся только за те дела, где видим высокие шансы на успех (обычно 70%+). У нас 98% выигранных дел.',
  },
  {
    id: 5,
    question: 'Можно ли оплачивать услуги поэтапно?',
    answer: 'Да, мы предлагаем гибкую систему оплаты. Сложные дела можно оплачивать поэтапно: консультация → подготовка документов → суд. Также есть абонентское обслуживание с ежемесячной оплатой.',
  },
  {
    id: 6,
    question: 'Нужно ли мне лично присутствовать в суде?',
    answer: 'Зависит от типа дела. По гражданским делам мы можем представлять вас по доверенности — ваше присутствие не требуется. По уголовным и административным делам в большинстве случаев требуется личное присутствие.',
  },
  {
    id: 7,
    question: 'Как выбрать юриста под мою задачу?',
    answer: 'После вашей заявки наш менеджер проведёт короткий опрос и подберёт 2-3 юристов с профильным опытом. Вы сможете изучить их профили, почитать отзывы и выбрать того, кто вам больше подходит.',
  },
  {
    id: 8,
    question: 'Что делать, если я проиграл дело?',
    answer: 'Мы можем обжаловать решение в апелляционной или кассационной инстанции. Часто удаётся отменить несправедливое решение. Оцениваем перспективы обжалования бесплатно.',
  },
  {
    id: 9,
    question: 'Какие документы нужны для консультации?',
    answer: 'Для первой консультации достаточно краткого описания ситуации. Если есть документы (договоры, претензии, решения суда) — отлично, но это необязательно. Юрист сам скажет, что нужно подготовить.',
  },
  {
    id: 10,
    question: 'Можно ли расторгнуть договор, если меня что-то не устроит?',
    answer: 'Да, вы можете расторгнуть договор в любой момент. Оплачиваете только фактически выполненную работу. Без скрытых платежей и штрафов.',
  },
];

const FAQAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-2">Часто задаваемые вопросы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ответы на популярные вопросы</h2>
          <p className="text-xl text-muted-foreground">
            Не нашли ответ? Напишите нам — ответим за 15 минут
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card
              key={faq.id}
              className="border-2 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">{faq.id}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                </div>
                <Icon
                  name="ChevronDown"
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pl-[72px] text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border-2 text-center">
          <Icon name="MessageCircle" size={48} className="mx-auto text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Остались вопросы?</h3>
          <p className="text-muted-foreground mb-6">
            Задайте их ИИ-ассистенту или запишитесь на бесплатную консультацию
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2">
            <Icon name="Phone" size={20} />
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;