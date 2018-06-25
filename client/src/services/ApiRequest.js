const ApiRequest = {};

ApiRequest.get = (url, next) => {
  fetch(url)
    .then(res => res.json())
    .then(response => next(response));
};

ApiRequest.post = (url, payload, next = () => {}) => {
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  };
  fetch(url, options)
    .then(res => res.json())
    .then(response => next(response));
};

export default ApiRequest;
