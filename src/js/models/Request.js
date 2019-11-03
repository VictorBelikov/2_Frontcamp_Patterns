class RequestFactory {
  createRequest(url, method, body) {
    switch (method) {
      case 'GET':
        return new Request(url, { method, body });
      case 'POST':
        return new Request(url, { method, body });
      case 'DELETE':
        return new Request(url, { method, body });
      case 'PATCH':
        return new Request(url, { method, body });
      case 'PUT':
        return new Request(url, { method, body });
      case 'OPTIONS':
        return new Request(url, { method, body });
      default:
        throw new Error('!!ERROR!!: This request type can\'t be processed');
    }
  }
}

export default (url, method) => {
  return new RequestFactory().createRequest(url, method);
};
