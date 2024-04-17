const APP_BASE_URL = '/frontend-funtech';

export const BILLBOARD_ROUTE = APP_BASE_URL + '/';
export const NOTIFICATIONS_ROUTE = APP_BASE_URL + '/notifications';
export const FAVORITES_ROUTE = APP_BASE_URL + '/favorites';
export const PROFILE_ROUTE = APP_BASE_URL + '/profile';
export const AUTH_ROUTE = APP_BASE_URL + '/auth';
export const EVENTS_ROUTE = APP_BASE_URL + '/events';

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
