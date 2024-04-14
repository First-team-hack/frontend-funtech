export const BILLBOARD_ROUTE = '/';
export const RANDOM_COFFEE_ROUTE = '/randomcoffee';
export const NOTIFICATIONS_ROUTE = '/notifications';
export const FAVORITES_ROUTE = '/favorites';
export const PROFILE_ROUTE = '/profile';
export const AUTH_ROUTE = '/auth';
export const EVENTS_ROUTE = '/events';

// Имена странниц по роутам, используются в навигации хедера и breadcrumbs
export const ROUTE_NAMES = {
  '/': 'Афиша',
  '/randomcoffee': 'Random Coffee',
  '/notifications': 'Уведомления',
  '/favorites': 'Избранное',
  '/profile': 'Профиль',
  '/settings': 'Настройки',
};

// events themes and user interests
export const THEMES_AND_INTERESTS = ['Frontend', 'Backend', 'IOS', 'Android', 'UI/UX дизайн'];

// events cities
export const EVENT_CITES = ['Москва', 'Владивосток', 'Санкт-Петербург'];

// event formats
export const EVENT_FORMATS = [
  { name: 'Онлайн', value: 'online' },
  {
    name: 'Онлайн и Оффлайн',
    value: 'online+offline',
  },
];

// event sorting by
export const EVENTS_SORT_BY = [
  { name: 'По дате', value: 'date' },
  { name: 'По названию', value: 'name' },
];

export const DEFAULT_VISIBLE_EVENTS = 8;
export const VISIBLE_EVENTS_INCREMENT = 8;
