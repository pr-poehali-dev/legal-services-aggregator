import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const OfficeLocation = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш офис</h2>
          <p className="text-xl text-muted-foreground">Приходите на личную консультацию или встретимся онлайн</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-primary" />
                Контактная информация
              </CardTitle>
              <CardDescription>Работаем ежедневно с 9:00 до 21:00</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="MapPin" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Адрес офиса</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Тверская, д. 12, офис 305<br />
                      БЦ "Центральный", 3 этаж
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Phone" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-primary hover:underline text-lg">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Mail" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@lawfirm.ru" className="text-primary hover:underline">
                      info@lawfirm.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 9:00 - 21:00<br />
                      Сб-Вс: 10:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t space-y-3">
                <Button className="w-full h-12 bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на встречу
                </Button>
                <Button variant="outline" className="w-full h-12">
                  <Icon name="Video" size={20} className="mr-2" />
                  Онлайн-консультация
                </Button>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <strong>Парковка:</strong> Бесплатная парковка для клиентов на территории БЦ (2 часа)
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border-2 text-center">
          <h3 className="text-2xl font-bold mb-4">Как до нас добраться</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="TrainFront" size={24} className="text-blue-600" />
              </div>
              <div className="font-semibold mb-1">Метро</div>
              <div className="text-sm text-muted-foreground">
                Станция "Тверская" или "Пушкинская"<br />
                5 минут пешком
              </div>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Car" size={24} className="text-green-600" />
              </div>
              <div className="font-semibold mb-1">На машине</div>
              <div className="text-sm text-muted-foreground">
                Бесплатная парковка<br />
                Въезд с Тверской улицы
              </div>
            </div>
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Bus" size={24} className="text-orange-600" />
              </div>
              <div className="font-semibold mb-1">Автобус</div>
              <div className="text-sm text-muted-foreground">
                Остановка "Пушкинская площадь"<br />
                Маршруты: 12, 101, м7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;