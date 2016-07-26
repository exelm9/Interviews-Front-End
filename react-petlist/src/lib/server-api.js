import axios from 'axios';
/* abstract axios call */
export const callAPI = (method, endpoint, callback, data) => {
  axios({
    method: method,
    url: endpoint,
    data: data
  }).then(function (response) {
    return callback(response);
  })
  .catch(function (error) {
    callback(error);
  });
}

export const search = (data, cb) => {
  return callAPI("get", "/static/search.json", cb);
}

export const searchBoarding = (data, cb) => {
  return callAPI("get", "/static/search.json?service=boarding", cb);
}

export const searchSitting = (data, cb) => {
  return callAPI("get", "/static/search.json?service=sitting", cb);
}