const BASE_URL = 'https://book-store.mvsoft.co.rs/books';

export const getBooks = async (args) => {
  var requestParams = '';
  if (args.requestParams) {
    for (let [key, value] of Object.entries(args.requestParams)) {
      if (value !== null) {
        if (requestParams.length === 0) {
          requestParams += '?' + key + '=' + value;
        }
          else {
          requestParams += '&' + key + '=' + value;
        }
      }
    }
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    return fetch(`${BASE_URL}${requestParams}`, requestOptions).
    then(response => response)
    .then(response => response.text())
  }
};

export const getBookById = async (id) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    return fetch(`${BASE_URL}/${id}`, requestOptions).
    then(response => response)
    .then(response => response.text())
};

export const postMethod = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("accept", "application/json");
  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: JSON.stringify(body),
  };
  return fetch(`${BASE_URL}`, requestOptions).
  then(response => response)
  .then(response => response.text())
};

export const updateMethod = async (args) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("accept", "application/json");

  var requestOptions = {
    method: 'PATCH',
    redirect: 'follow',
    headers: myHeaders,
    body: JSON.stringify(args.body),
  };
  return fetch(`${BASE_URL}/${args.id}`, requestOptions).
  then(response => response)
  .then(response => response.text())
};

export const deleteMethod = async (id) => {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  return fetch(`${BASE_URL}/${id}`, requestOptions).
  then(response => response)
  .then(response => response.text())
};