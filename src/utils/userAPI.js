const BASE_URL = '/api/users/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json();
        // if not res.ok, chances are duplicate email...
        throw new Error('Email already taken!');
    })
    // Parameter destructuring!
    .then(({token}) => token);
    // the above could have been written as
    //.then((token) => token.token);
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(creds)
    })
    .then(res => {
      // Valid login if we have a status of 200 (res.ok)
      if (res.ok) return res.json();
      throw new Error('Bad credentials!');
    })
    .then(({token}) => token);
  }
  
  export default {
    signup,
    login
  };