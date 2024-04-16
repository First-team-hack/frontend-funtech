import sortBy from 'lodash/sortBy';

export const filterBy = (events, filters) => {
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(filters.keyword.toLowerCase().trim()) &&
      event.theme === (filters.theme ? filters.theme : event.theme) &&
      event.city === (filters.city ? filters.city : event.city) &&
      event.format === (filters.format ? filters.format : event.format)
  );

  if (filters.sortBy) {
    if (filters.sortBy === 'name') {
      return sortBy(filteredEvents, 'title');
    } else if (filters.sortBy === 'date') {
      return sortBy(filteredEvents, 'date');
    }
  }
  return filteredEvents;
};
