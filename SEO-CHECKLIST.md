# SEO Чеклист для ЮрПомощь

## ✅ Уже реализовано

### Техническое SEO
- ✅ Мета-теги (title, description, keywords)
- ✅ Open Graph для соцсетей
- ✅ Twitter Cards
- ✅ Schema.org разметка (LocalBusiness, FAQPage, WebSite)
- ✅ Canonical URL
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ Humans.txt
- ✅ Security.txt
- ✅ PWA Manifest
- ✅ Hreflang для мультиязычности
- ✅ Семантическая HTML разметка
- ✅ ARIA labels для доступности

### On-Page SEO
- ✅ H1-H6 заголовки структурированы
- ✅ Alt теги для изображений
- ✅ Внутренняя перелинковка
- ✅ Breadcrumbs (хлебные крошки)
- ✅ Оптимизированные URL
- ✅ Мобильная адаптивность

### Performance
- ✅ Preconnect для внешних ресурсов
- ✅ DNS-prefetch
- ✅ Lazy loading изображений
- ✅ Critical CSS

## 🔧 Необходимо настроить вручную

### 1. Google Search Console
1. Перейдите на https://search.google.com/search-console
2. Добавьте ваш сайт
3. Подтвердите права собственности через HTML-тег:
   ```html
   <meta name="google-site-verification" content="YOUR-CODE-HERE"/>
   ```
4. Загрузите sitemap.xml: https://yoursite.com/sitemap.xml

### 2. Яндекс.Вебмастер
1. Перейдите на https://webmaster.yandex.ru
2. Добавьте сайт
3. Подтвердите через мета-тег:
   ```html
   <meta name="yandex-verification" content="YOUR-CODE-HERE"/>
   ```
4. Загрузите sitemap.xml

### 3. Google Analytics / Яндекс.Метрика
Добавьте счетчики аналитики в index.html перед закрывающим тегом </body>:

**Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Яндекс.Метрика:**
```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

### 4. Обновите ссылки
Замените все `https://yoursite.com` на ваш реальный домен в файлах:
- index.html
- sitemap.xml
- robots.txt
- src/pages/Index.tsx

### 5. Социальные сети
Добавьте реальные ссылки на ваши соцсети в:
- index.html (Schema.org "sameAs")
- src/components/MessengerButtons.tsx

### 6. Контакты
Обновите контактную информацию:
- Телефон: +7 (800) 555-35-35
- Email: info@yoursite.com
- Адрес офиса
- Координаты на карте

### 7. SSL сертификат
Убедитесь, что сайт работает по HTTPS (обязательно для SEO)

### 8. Скорость загрузки
Проверьте скорость на:
- https://pagespeed.web.dev/
- https://webmaster.yandex.ru/tools/speed/
Цель: 90+ баллов

### 9. Изображения
- Добавьте реальные изображения вместо плейсхолдеров
- Оптимизируйте размер (WebP формат)
- Добавьте alt-теги с ключевыми словами

### 10. Контент
- Добавьте уникальные статьи в блог
- Расширьте описания услуг
- Добавьте реальные кейсы клиентов
- Обновляйте FAQ регулярно

## 📊 Метрики для отслеживания

### Технические
- Индексация страниц (Google/Яндекс)
- Скорость загрузки (Core Web Vitals)
- Мобильная оптимизация
- Ошибки сканирования

### Поведенческие
- Время на сайте
- Показатель отказов
- Глубина просмотра
- Конверсии (заявки)

### Позиции
- "юридические услуги"
- "юрист онлайн"
- "консультация юриста"
- "юридическая помощь"
- "адвокат по недвижимости"

## 🚀 Дополнительные рекомендации

### Локальное SEO
1. Зарегистрируйтесь в Google My Business
2. Добавьте компанию на Яндекс.Карты
3. Зарегистрируйтесь в 2GIS
4. Добавьте компанию в справочники (Zoon, Yell.ru, и т.д.)

### Контент-маркетинг
1. Регулярно публикуйте статьи (1-2 в неделю)
2. Создавайте видео-контент
3. Проводите вебинары
4. Публикуйте кейсы клиентов

### Внешние ссылки
1. Гостевые посты на юридических порталах
2. Публикации в СМИ
3. Партнерские программы
4. Отзывы на профильных платформах

### Социальные сигналы
1. Активность в соцсетях
2. Репосты статей
3. Комментарии и обсуждения
4. YouTube канал

## 📱 Мобильная оптимизация
- ✅ Адаптивный дизайн
- ✅ Быстрая загрузка
- ✅ Удобная навигация
- ✅ Кликабельные кнопки

## 🔐 Безопасность
- ✅ HTTPS
- ✅ Security.txt
- ✅ Защита от XSS
- ✅ CSP заголовки (рекомендуется настроить на сервере)

## 📈 Ожидаемые результаты

### Через 1 месяц
- Индексация основных страниц
- Первые позиции в выдаче (брендовые запросы)
- 100-500 посетителей/месяц

### Через 3 месяца
- ТОП-10 по среднечастотным запросам
- 1000-3000 посетителей/месяц
- 10-30 заявок/месяц

### Через 6 месяцев
- ТОП-5 по ключевым запросам
- 3000-10000 посетителей/месяц
- 50-100+ заявок/месяц

---

**Важно:** SEO - это долгосрочная стратегия. Результаты появляются через 3-6 месяцев постоянной работы над контентом и техническими параметрами.
