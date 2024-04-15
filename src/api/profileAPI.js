class ProfileApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
  };

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  login(username, password) {
    return this._request(`${this._baseUrl}/auth/jwt/create`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ username, password }),
    });
  }

  setToken() {
    this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/profile/users/me`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  updateUserInfo(userInfo) {
    return this._request(`${this._baseUrl}/profile/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userInfo),
    });
  }

  getRegisteredEvents() {
    return this._request(`${this._baseUrl}/profile/events/registered`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  addRegisteredEvent(eventId) {
    return this._request(`${this._baseUrl}/profile/events/registered`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(eventId),
    });
  }

  deleteRegisteredEvent(eventId) {
    return this._request(`${this._baseUrl}/profile/events/registered`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(eventId),
    });
  }

  getFavoriteEvents() {
    return this._request(`${this._baseUrl}/profile/events/favorites`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  addFavoriteEvent(eventId) {
    return this._request(`${this._baseUrl}/profile/events/favorites`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(eventId),
    });
  }

  deleteFavoriteEvent(eventId) {
    return this._request(`${this._baseUrl}/profile/events/favorites`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(eventId),
    });
  }

  getRecommendedEvents() {
    return this._request(`${this._baseUrl}/profile/events/recommended`, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const profileApi = new ProfileApi({
  baseUrl: process.env.REACT_APP_PROFILE_BASE_URL,
  headers: {
    authorization: localStorage.getItem('jwt') ? `Bearer ${localStorage.getItem('jwt')}` : '',
    'Content-Type': 'application/json',
  },
});

export default profileApi;
