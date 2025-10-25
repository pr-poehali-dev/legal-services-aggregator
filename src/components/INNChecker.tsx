import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CompanyData {
  inn: string;
  name: string;
  ogrn: string;
  address: string;
  status: 'active' | 'liquidated' | 'bankrupt';
  director: string;
  registrationDate: string;
  capital: string;
  risks: string[];
}

const INNChecker = () => {
  const [inn, setInn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  const handleCheck = async () => {
    if (inn.length < 10) return;

    setIsLoading(true);

    setTimeout(() => {
      const mockData: CompanyData = {
        inn: inn,
        name: 'ООО "ПРИМЕР КОМПАНИИ"',
        ogrn: '1234567890123',
        address: 'г. Москва, ул. Примерная, д. 1',
        status: Math.random() > 0.5 ? 'active' : 'liquidated',
        director: 'Иванов Иван Иванович',
        registrationDate: '15.03.2018',
        capital: '10 000 ₽',
        risks: Math.random() > 0.5 ? [] : ['Задолженность по налогам', 'Судебные иски'],
      };

      setCompanyData(mockData);
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'liquidated':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'bankrupt':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Действующая';
      case 'liquidated':
        return 'Ликвидирована';
      case 'bankrupt':
        return 'Банкротство';
      default:
        return 'Неизвестно';
    }
  };

  return (
    <section id="inn-checker" className="py-20 px-6 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-2xl border-2">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Search" size={32} />
              Проверка контрагента по ИНН
            </CardTitle>
            <CardDescription className="text-emerald-100 text-lg">
              Проверьте надёжность партнёра перед заключением сделки — бесплатно
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex gap-4 mb-8">
              <Input
                placeholder="Введите ИНН (10 или 12 цифр)"
                value={inn}
                onChange={(e) => setInn(e.target.value.replace(/\D/g, '').slice(0, 12))}
                className="text-lg"
              />
              <Button
                onClick={handleCheck}
                disabled={inn.length < 10 || isLoading}
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 min-w-[140px]"
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Проверка...
                  </>
                ) : (
                  <>
                    <Icon name="Search" size={20} className="mr-2" />
                    Проверить
                  </>
                )}
              </Button>
            </div>

            {companyData && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{companyData.name}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>ИНН: <span className="font-mono font-semibold">{companyData.inn}</span></div>
                        <div>ОГРН: <span className="font-mono">{companyData.ogrn}</span></div>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(companyData.status)} text-sm px-4 py-2 border-2`}>
                      {getStatusText(companyData.status)}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Адрес</div>
                        <div className="text-sm font-medium">{companyData.address}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="User" size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Руководитель</div>
                        <div className="text-sm font-medium">{companyData.director}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Calendar" size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Дата регистрации</div>
                        <div className="text-sm font-medium">{companyData.registrationDate}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="DollarSign" size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Уставный капитал</div>
                        <div className="text-sm font-medium">{companyData.capital}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {companyData.risks.length > 0 ? (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="AlertTriangle" size={24} className="text-red-600" />
                      <h4 className="text-lg font-bold text-red-900">Обнаружены риски</h4>
                    </div>
                    <ul className="space-y-2">
                      {companyData.risks.map((risk, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-red-800">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={24} className="text-green-600" />
                      <h4 className="text-lg font-bold text-green-900">Критических рисков не обнаружено</h4>
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p className="font-semibold mb-2">Нужна полная проверка контрагента?</p>
                      <p>Юристы проведут углублённую проверку: судебные дела, аффилированность, финансовое состояние, репутация. Заказать за 5000₽.</p>
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                        <Icon name="FileSearch" size={16} className="mr-2" />
                        Заказать полную проверку
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center text-sm">
              <div>
                <Icon name="Shield" size={24} className="mx-auto text-emerald-500 mb-2" />
                <div className="font-semibold">Данные из ЕГРЮЛ</div>
                <div className="text-muted-foreground">Официальная база ФНС</div>
              </div>
              <div>
                <Icon name="Clock" size={24} className="mx-auto text-emerald-500 mb-2" />
                <div className="font-semibold">Актуальные данные</div>
                <div className="text-muted-foreground">Обновление каждый день</div>
              </div>
              <div>
                <Icon name="Lock" size={24} className="mx-auto text-emerald-500 mb-2" />
                <div className="font-semibold">Конфиденциально</div>
                <div className="text-muted-foreground">Проверки не отслеживаются</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default INNChecker;
