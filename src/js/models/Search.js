import buildUrl from '../utils/UrlBuilder';
import requestProxy from './Proxy';

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
    const API_KEY = 'ec3eea97cc834c179ebf45befd73ec8f';
    const PAGE_SIZE = 10;
    const date = getCurrDate();

    try {
      const url = buildUrl(elem.id, this.channel, API_KEY, date, PAGE_SIZE);
      const request = requestProxy(url, 'GET');
      const response = await fetch(request);
      const result = await response.json();
      this.articles = result.articles;
    } catch (err) {
      console.log(`!!ERROR!! in Search module: ${err}`);
      throw err;
    }
  }
}
