export default (article) => {
  return `
    <li>
      <a href="${article.url}" target="_blank">
        <figure class="article__img--wrapper">
          <img src="${article.urlToImage}" alt="article picture" class="article__img">
        </figure>
        <div class="article__data">
          <h4 class="article__title">${article.title}</h4>
          <p class="article__content">${article.content ? article.content.replace(/\[.*/, '') : ''}</p>
          <p class="article__author"><b>Author:</b> ${article.author || article.source.id}</p>
          <p class="article__date"><b>Published:</b> ${article.publishedAt.replace(/T.*/, '')}</p>
        </div>
      </a>
    </li>
  `;
};
