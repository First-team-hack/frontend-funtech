const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
};

export const fetchFilteredEvents = (keyword, theme, city, sortBy, format) => {
  return fetch(`${process.env.REACT_APP_EVENTS_BASE_URL}/events`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ keyword, theme, city, sortBy, format }),
  }).then(checkResponse);
};

export const fetchCompletedEvents = () => {
  return fetch(`${process.env.REACT_APP_EVENTS_BASE_URL}/events/completed`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
