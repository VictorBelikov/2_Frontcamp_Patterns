import '../../scss/style.scss';
import Search from '../models/Search';
import * as searchController from './searchController';
import elements from '../views/base';

/**
 * Global state of the app
 */
const state = {};

const controlSearch = async (elem) => {
  try {
    const query = searchController.getInput(elem);

    if (query && query.trim() !== '') {
      state.search = new Search(query);
      await state.search.getNews(elem);

      searchController.clearInput();
      searchController.setSelectDefault();
      searchController.clearResults();
      searchController.renderArticles(state.search.articles);
    }
  } catch (err) {
    const module = await import('./errorController.js');
    const errorHandler = module.default;
    errorHandler(err);
  }
};


elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch(elements.searchInput);
});

elements.newsChannels.addEventListener('change', (e) => {
  e.preventDefault();
  controlSearch(elements.newsChannels);
});
