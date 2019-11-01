const getCurrDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${yyyy}/${mm}/${dd}`;
};

export default class Search {
  constructor(channel) {
    this.channel = channel;
  }

  async getNews(elem) {
    const apiKey = 'ec3eea97cc834c179ebf45befd73ec8f';
    const date = getCurrDate();
    let response = '';

    try {
      if (elem.id === 'search-input') {
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.channel}&from=${date}&sortBy=popularity&apiKey=${apiKey}`);
      } else if (elem.id === 'news-channels') {
        response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${this.channel}&apiKey=${apiKey}`);
      }

      const result = await response.json();
      this.articles = result.articles.slice(0, 10);
    } catch (err) {
      alert(`!!ERROR!!: ${err}`);
    }
  }
}
