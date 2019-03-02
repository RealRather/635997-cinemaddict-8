import makeCard from './make-card.js';
import makeFilter from './make-filter.js';

const COUNT_CARDS = 7;
const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 20;

const filters = {
  all: `All movies`,
  watchlist: `Watchlist`,
  history: `History`,
  favorites: `Favorites`,
  stats: `Stats`
};

const mainNavBlock = document.querySelector(`.main-navigation`);
const filmsCardsBlock = document.querySelector(`.films-list__container`);
const extraFilmsCardsBlocks = document.querySelectorAll(`.films-list--extra`);

const getRandomFixValue = ((minValue, maxValue) => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

const renderCards = ((countCards, container) => {
  container.innerHTML = ``;
  new Array(countCards)
    .fill(makeCard())
    .map(() => container
      .appendChild(makeCard())
    );
});

const createFiltersElements = ((filtersObj) => {
  const filtersKeys = Object.keys(filtersObj);
  return filtersKeys
    .map((key) => {
      let count = getRandomFixValue(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
      let state;
      switch (key) {
        case `all`:
          state = `active`;
          count = ``;
          break;
        case `stats`:
          state = `additional`;
          count = ``;
          break;
      }
      return makeFilter(key, filters[key], state, count);
    })
    .join(``);
});


const renderFilters = ((container, filtersObj) => {
  container.innerHTML = (createFiltersElements(filtersObj));
  container.addEventListener(`click`, (evt) => onFilterLabelClickHandler(evt), true);
});

const onFilterLabelClickHandler = ((evt) => {
  evt.stopPropagation();
  if (evt.target.getAttribute(`href`) === `#stats`) {
    return;
  }
  renderCards(
      getRandomFixValue(1, COUNT_CARDS),
      filmsCardsBlock
  );
});

renderCards(COUNT_CARDS, filmsCardsBlock);
renderFilters(mainNavBlock, filters);
renderCards(2, extraFilmsCardsBlocks[0].children[1]);
renderCards(2, extraFilmsCardsBlocks[1].children[1]);

