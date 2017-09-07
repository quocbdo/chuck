import tokenService from './tokenService';

const BASE_URL = '/api/savedjokes/';

function index() {
  return new Promise(function(resolve, reject) {
    fetch(BASE_URL, getAuthRequestOptions('GET'))
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad credentials');
    })
    .then(jokes => resolve(jokes))
  });
}

/*----- Helper Functions -----*/

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
  };
}

export default {
  index
};