# 🏢 Global Systems Group - Corporate Portal

Премиум корпоративный портал для многопрофильной холдинговой компании Global Systems Group (GSG).

Premium corporate portal for Global Systems Group (GSG) multidisciplinary holding company.

---

## 🚀 Быстрый старт / Quick Start

### Вариант 1: Локальный запуск / Local Development

**Шаг 1: Клонируйте репозиторий**
```bash
git clone https://github.com/YOUR_USERNAME/gsg-portal.git
cd gsg-portal
```

**Шаг 2: Установите зависимости**
```bash
npm install
```

**Шаг 3: Запустите dev-сервер**
```bash
npm run dev
```

Откройте браузер на `http://localhost:5173`

---

### Вариант 2: Деплой на GitHub Pages

**Шаг 1: Создайте репозиторий на GitHub**
1. Перейдите на https://github.com/new
2. Назовите репозиторий `gsg-portal`
3. НЕ инициализируйте с README
4. Нажмите "Create repository"

**Шаг 2: Загрузите код**
```bash
# В папке проекта:
git init
git add .
git commit -m "Initial commit: GSG Corporate Portal"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gsg-portal.git
git push -u origin main
```

**Шаг 3: Настройте GitHub Pages**
1. Откройте `vite.config.js`
2. Убедитесь что `base: '/gsg-portal/'` совпадает с именем вашего репозитория
3. Если репозиторий называется по-другому, измените это значение

**Шаг 4: Деплой**
```bash
npm install
npm run deploy
```

**Шаг 5: Активируйте GitHub Pages**
1. Откройте Settings → Pages
2. Source: выберите ветку `gh-pages`
3. Папка: `/ (root)`
4. Нажмите Save

Ваш сайт будет доступен по адресу:
`https://YOUR_USERNAME.github.io/gsg-portal/`

---

## 📁 Структура проекта

```
gsg-portal/
├── src/
│   ├── App.jsx          # Главный компонент портала
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind styles
├── public/              # Статические файлы
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md
```

---

## 🎨 Особенности дизайна / Design Features

### Визуальная идентичность
- ✨ **Цветовая схема**: Platinum Silver, Deep Corporate Blue, Minimalist Black
- 🔤 **Типографика**: Rajdhani + Space Mono (избегаем generic шрифты)
- 🎬 **Анимации**: Плавные transitions и staggered reveals
- 📱 **Responsive**: Полная адаптивность для всех устройств

### Ключевые секции
1. **Hero Section** - Кинематографичное вступление с animated background
2. **Dual Engine** - Интерактивные панели GCS и Build-Core
3. **Infrastructure** - Портфолио активов GS-Technology (€4.85M)
4. **Corporate Governance** - Визуальная структура холдинга
5. **Global Network** - Карта расширения (Prague, Dubai, Frankfurt)
6. **Investor Relations** - Профессиональная форма контакта

---

## 🛠 Технологический стек

- **React 18** - UI фреймворк
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Иконки
- **Google Fonts** - Rajdhani & Space Mono

---

## 📝 Команды NPM

```bash
npm run dev      # Запуск dev-сервера (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

---

## 🔧 Настройка для вашего проекта

### Изменить название репозитория
Если ваш репозиторий называется не `gsg-portal`, измените в `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/ВАШ-РЕПОЗИТОРИЙ/',  // ← Измените здесь
})
```

### Обновить ссылки
В файле `src/App.jsx` обновите:
- Ссылки на дочерние компании (GCS, Build-Core)
- Контактную информацию
- Email и телефоны

---

## 🌐 Live Demo

После деплоя ваш сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/gsg-portal/
```

---

## 📄 Лицензия / License

© 2026 Global Systems Group. All rights reserved.

---

## 🆘 Помощь / Support

**Проблемы с запуском?**

1. **Ошибка при `npm install`**: Убедитесь что установлен Node.js v16+
   ```bash
   node --version  # Должен быть 16.0.0 или выше
   ```

2. **Белый экран после деплоя**: Проверьте `base` в `vite.config.js`

3. **404 на GitHub Pages**: Подождите 5-10 минут после деплоя

**Нужна помощь?** Создайте Issue в репозитории.

---

## 🎯 Roadmap

- [ ] Добавить мультиязычность (EN/CZ/RU)
- [ ] Интеграция с CMS для контента
- [ ] Секция новостей и пресс-релизов
- [ ] Личный кабинет инвестора
- [ ] Интерактивная финансовая отчетность

---

**Made with ❤️ in Czech Republic 🇨🇿**
