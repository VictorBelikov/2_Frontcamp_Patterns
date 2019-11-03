export default (id, channel, apiKey, date) => {
  if (id === 'search-input') {
    return `https://newsapi.org/v2/1everything?q=${channel}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
    // throw new Error()
  }
  return `https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=${apiKey}`;
};
