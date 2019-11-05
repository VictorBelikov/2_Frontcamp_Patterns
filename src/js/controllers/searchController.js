import elements from '../views/base';
import searchView from '../views/searchView';

export const getInput = (elem) => elem.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.newsBlock.innerHTML = '';
};

export const setSelectDefault = () => {
  elements.selectDefault.selected = 'selected';
};

export const rederArticles = (articles) => {
  articles.forEach((article) => {
    const markup = searchView(article);
    elements.newsBlock.insertAdjacentHTML('beforeend', markup);
  });
};
