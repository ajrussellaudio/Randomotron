const ApiRequest = {};

ApiRequest.post = (url, next) => {
  const req = new XMLHttpRequest();
  req.open("post", url);
  req.addEventListener("load", () => {
    if (req.status !== 201) return;
    const response = JSON.parse(req.response);
    next(response);
  });
  req.send();
};

export default ApiRequest;
