import photo_speaker_1 from '../assets/event/speakers/speaker_1.png';
import photo_speaker_2 from '../assets/event/speakers/speaker_2.png';
import photo_speaker_3 from '../assets/event/speakers/speaker_3.png';
import chat_author_avatar from '../assets/chat_avatar.png';

export const mockUserData = {
  id: 1,
  firstName: 'Екатерина',
  lastName: 'Краснова',
  email: 'example@yandex.ru',
  phoneNumber: '9162323232',
  interest: 'Frontend',
  notificationByTelegram: false,
  notificationByWhatsapp: true,
  notificationByVk: false,
  notificationByViber: false,
  telegram: '',
  whatsapp: 'dwadwa',
  vk: '',
  viber: 'dsadsa',
};

export const mockQuestionData = [
  {
    question: 'Какое мероприятие вы проводите?',
    answer:
      'Мы проводим IT конференцию под названием "Восхитительное объяснение возможностей JS", где ведущие эксперты рассказывают о последних технологических тенденциях и инновациях.',
  },
  {
    question: 'Где и когда пройдет ваше мероприятие?',
    answer:
      'Мероприятия пройдет 3 сентября в 12:00, по адрусу г. Владивосток, ул. Брэндана Эйха, д. 404. Так же меропритяие можно будет посмотреть онлайн на нашем сайте',
  },
  {
    question: 'Как можно зарегистрироваться на участие в мероприятии?',
    answer:
      'Нажмите кнопку "Зарегистрироваться" ниже. После регистрации вы получите подтверждение участия и дальнейшие инструкции о подключении к онлайн трансляции.',
  },
];

export const mockSpeakerData = [
  {
    id: 1,
    firstName: 'Алиса',
    lastName: 'Калакимова',
    position: 'Руководитель группы тестирования',
    about: 'Вошла в IT в 2010 году. Работала в e-commerce',
    photo: photo_speaker_1,
  },
  {
    id: 2,
    firstName: 'Андрей',
    lastName: 'Калакимов',
    position: 'Разработчик джава',
    about: 'C 2005 года работаю в Яндексе: начинал как разработчик',
    photo: photo_speaker_2,
  },
  {
    id: 3,
    firstName: 'Эксперт Роберт',
    lastName: 'Миронов',
    position: 'Бэкэнд',
    about: 'Бессменный ведущий подкаста Frontend Weekend и участник ПК FrontendConf',
    photo: photo_speaker_3,
  },
];

export const notifications = [
  {
    id: 1,
    title: 'Текст уведомления',
    text: 'Подробный текст уведомления',
    broadcastUrl: '/profile',
    age: '3 м',
  },
  {
    id: 2,
    title: 'Текст уведомления 2',
    text: 'Подробный текст уведомления 2',
    broadcastUrl: '/',
    age: '3 м',
  },
  {
    id: 3,
    title: 'Текст уведомления3',
    text: 'Подробный текст уведомления3',
    broadcastUrl: '/',
    age: '3 м',
  },
  {
    id: 4,
    title: 'Текст уведомления 4',
    text: 'Подробный текст уведомления 4',
    broadcastUrl: '/',
    age: '3 м',
  },
  {
    id: 5,
    title: 'Текст уведомления 5',
    text: 'Подробный текст уведомления 5',
    broadcastUrl: '/',
    age: '3 м',
  },
  {
    id: 6,
    title: 'Текст уведомления 6 ',
    text: 'Подробный текст уведомления 6',
    broadcastUrl: '/',
    age: '3 м',
  },
];

export const mockCardsData = [
  {
    id: 1,
    title: 'Восхитительное объяснение возможностей JS',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета',
    theme: 'Frontend',
    format: 'online+offline',
    status: 'upcoming',
    date: '12.07.2024',
    time: '15:33',
    city: 'Москва',
    address: 'ул. Пушкина, д.4, главный конференц-зал',
    seatsLeft: 1,
    colorTheme: 0,
  },
  {
    id: 2,
    title: 'Как стать крутым бэкенд-разработчиком? Ответы на ваши вопросы',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Backend',
    format: 'online',
    status: 'complete',
    date: '12.03.2024',
    time: '15:33',
    city: '',
    address: '',
    seatsLeft: 0,
    colorTheme: 1,
  },
  {
    id: 3,
    title: 'Практикум. Разработка Telegram-бота с использованием serverless',
    speakerDescription: 'Эксперт Анастасиялид фронтенд',
    theme: 'IOS',
    format: 'online',
    status: 'live',
    date: '12.04.2024',
    time: '20:48',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 0,
    colorTheme: 2,
  },
  {
    id: 4,
    title: 'Форум "Мир Мобильной Разработки: Технологии и Возможности',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Android',
    format: 'online+offline',
    status: 'live',
    date: '15.08.2024',
    time: '10:48',
    city: 'Владивосток',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 33,
    colorTheme: 0,
  },
  {
    id: 5,
    title: 'UI/UX Марафон: Дизайн Интерфейсов для Успеха',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета.',
    theme: 'UI/UX дизайн',
    format: 'online+offline',
    status: 'live',
    date: '10.03.2024',
    time: '10:00',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 18,
    colorTheme: 1,
  },
  {
    id: 6,
    title: 'Мастер-Класс "Веб-Разработка: Лучшие практики',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета',
    theme: 'Frontend',
    format: 'online',
    status: 'upcoming',
    date: '12.07.2024',
    time: '15:33',
    city: '',
    address: '',
    seatsLeft: 0,
    colorTheme: 0,
  },
  {
    id: 7,
    title: 'Конференция "JavaScript Магия',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Backend',
    format: 'online',
    status: 'upcoming',
    date: '12.03.2024',
    time: '15:33',
    city: 'Москва',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 3,
    colorTheme: 1,
  },
  {
    id: 8,
    title: 'День iOS: Технологии и Тренды в Разработке для Apple Устройств',
    speakerDescription: 'Эксперт Анастасиялид фронтенд',
    theme: 'IOS',
    format: 'online+offline',
    status: 'live',
    date: '12.04.2024',
    time: '20:48',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 123,
    colorTheme: 2,
  },
  {
    id: 9,
    title: 'AndroidExpo: Инсайты и Идеи для Развития',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Android',
    format: 'online+offline',
    status: 'upcoming',
    date: '15.08.2024',
    time: '10:48',
    city: 'Владивосток',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 33,
    colorTheme: 0,
  },
  {
    id: 10,
    title: 'UX/UI Инновации: Создание Пользовательских Опытов',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета.',
    theme: 'UI/UX дизайн',
    format: 'online+offline',
    status: 'complete',
    date: '10.03.2024',
    time: '10:00',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 18,
    colorTheme: 1,
  },
  {
    id: 11,
    title: 'Тренинг "Основы HTML, CSS и JavaScript: Начало пути',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета',
    theme: 'Frontend',
    format: 'online+offline',
    status: 'upcoming',
    date: '12.07.2024',
    time: '15:33',
    city: 'Москва',
    address: 'ул. Пушкина, д.4, главный конференц-зал',
    seatsLeft: 0,
    colorTheme: 0,
  },
  {
    id: 12,
    title: 'Конференция "WebTech: Мир Технологий"',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Backend',
    format: 'online',
    status: 'complete',
    date: '12.03.2024',
    time: '15:33',
    city: 'Москва',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 3,
    colorTheme: 1,
  },
  {
    id: 13,
    title: 'Мобильные Технологии: От Идеи до Реализации',
    speakerDescription: 'Эксперт Анастасиялид фронтенд',
    theme: 'IOS',
    format: 'online',
    status: 'live',
    date: '12.04.2024',
    time: '20:48',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 123,
    colorTheme: 2,
  },
  {
    id: 14,
    title: 'MobileDev Центр: Технологии мобильной разработки',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Android',
    format: 'online+offline',
    status: 'upcoming',
    date: '15.08.2024',
    time: '10:48',
    city: 'Владивосток',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 33,
    colorTheme: 0,
  },
  {
    id: 15,
    title: 'UX/UI Революция: Дизайн Будущего',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета.',
    theme: 'UI/UX дизайн',
    format: 'online+offline',
    status: 'upcoming',
    date: '10.09.2024',
    time: '10:00',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 18,
    colorTheme: 1,
  },
  {
    id: 16,
    title: 'ReactFest: Праздник Реактивной Разработки',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета',
    theme: 'Frontend',
    format: 'online+offline',
    status: 'upcoming',
    date: '12.07.2024',
    time: '15:33',
    city: 'Москва',
    address: 'ул. Пушкина, д.4, главный конференц-зал',
    seatsLeft: 0,
    colorTheme: 0,
  },
  {
    id: 17,
    title: 'Веб-Мастерская: Тренды и Инновации',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Backend',
    format: 'online',
    status: 'complete',
    date: '12.03.2024',
    time: '15:33',
    city: 'Москва',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 3,
    colorTheme: 1,
  },
  {
    id: 18,
    title: 'Круглый стол "Мобильная разработка: Вызовы и перспективы',
    speakerDescription: 'Эксперт Анастасиялид фронтенд',
    theme: 'IOS',
    format: 'online',
    status: 'live',
    date: '12.04.2024',
    time: '20:48',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 123,
    colorTheme: 2,
  },
  {
    id: 19,
    title: 'Саммит "Мобильные Тренды: Будущее в ваших руках',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Android',
    format: 'online+offline',
    status: 'upcoming',
    date: '15.08.2024',
    time: '10:48',
    city: 'Владивосток',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 33,
    colorTheme: 0,
  },
  {
    id: 20,
    title: 'WebWizard: Магия Веб-Разработки и Дизайна',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета.',
    theme: 'UI/UX дизайн',
    format: 'online+offline',
    status: 'complete',
    date: '10.03.2024',
    time: '10:00',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 18,
    colorTheme: 1,
  },
  {
    id: 21,
    title: 'Семинар "Angular и Vue.js: Битва фреймворков"',
    speakerDescription: 'Бесплатный вебинар Эдриенн Таке',
    theme: 'Frontend',
    format: 'online+offline',
    status: 'upcoming',
    date: '15.08.2024',
    time: '10:48',
    city: 'Владивосток',
    address: 'ул. Гагарина, д.4, главный конференц-зал',
    seatsLeft: 33,
    colorTheme: 0,
  },
  {
    id: 22,
    title: 'Конференция JavaScript Frontiers: Исследование новых горизонтов',
    speakerDescription: 'Эксперт Роберт Миронов Лид бэкенд - факультета.',
    theme: 'Backend',
    format: 'online+offline',
    status: 'complete',
    date: '10.03.2024',
    time: '10:00',
    city: 'Санкт-Петербург',
    address: 'ул. Коминтеран, д.5, главный конференц-зал',
    seatsLeft: 18,
    colorTheme: 1,
  },
];

export const mockLiveChatMessagges = [
  {
    authorAvatar: chat_author_avatar,
    authorName: 'Ассистент',
    text: 'Добро пожаловать на трансляцию!',
    time: new Date(new Date().setMinutes(new Date().getMinutes() - 7)),
  },
  {
    authorAvatar: chat_author_avatar,
    authorName: 'Ассистент',
    text: 'Мероприятие вот-вот начнется. Будет интересно!',
    time: new Date(new Date().setMinutes(new Date().getMinutes() - 5)),
  },
];
