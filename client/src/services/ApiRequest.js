const { proxy } = require("../../package.json");

const ApiRequest = {};

ApiRequest.get = (url, next) => {
  fetch(url)
    .then(res => res.json())
    .then(response => next(response));
};

ApiRequest.post = (url, payload, next = () => {}) => {
  const req = new XMLHttpRequest();
  req.open("post", proxy + url);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", () => {
    if (req.status !== 201) return;
    const response = JSON.parse(req.response);
    next(response);
  });
  req.send(JSON.stringify(payload));
};

export default ApiRequest;
