import '../../scss/style.scss';

import Search from '../models/Search';
import * as searchView from '../views/searchView';
import elements from '../views/base';

/**
 * Global state of the app
 */
const state = {};

const controlSearch = async (elem) => {
  try {
    const query = searchView.getInput(elem);

    if (query && query.trim() !== '') {
      state.search = new Search(query);
      await state.search.getNews(elem);

      searchView.clearInput();
      searchView.setSelectDefault();
      searchView.clearResults();

      searchView.rederResults(state.search.articles);
    }
  } catch (err) {
    const module = await import('../models/ErrorHandler.js');
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
