export default (id, channel, apiKey, date, pageSize) => {
  if (id === 'search-input') {
    return `https://newsapi.org/v2/everything?q=${channel}&pagesize=${pageSize}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
    // return `https://newsapi.org/v2/1everything?q=${channel}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
  }
  return `https://newsapi.org/v2/top-headlines?sources=${channel}&pagesize=${pageSize}&apiKey=${apiKey}`;
  // return `https://newsapi.org/v2/1top-headlines?sources=${channel}&apiKey=${apiKey}`;
};
