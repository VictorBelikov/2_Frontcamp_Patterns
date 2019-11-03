import createRequest from './Request';

const handler = {
  apply(target, context, argumentsList) {
    const requestInfo = `
      Request URL: ${argumentsList[0]};\n
      Request method: '${argumentsList[1]}'\n
      Request body: ${argumentsList[2] || 'without body'}.`;

    console.log(requestInfo);
    return target.apply(context, argumentsList);
  },
};

export default new Proxy(createRequest, handler);
