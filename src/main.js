import makeCard from './make-card.js';

const COUNT_CARDS = 7;
const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 10;
debugger;
const filmsCardsBlock = document.querySelector(`.films-list__container`);

const getRandomFixValue = ((minValue, maxValue) => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

const renderCards = ((countCards, container) => {
  container.innerHTML = ``;
  new Array(countCards)
    .fill(makeCard())
    .map(() => container
      .appendChild(makeCard())
    );
});

renderCards(COUNT_CARDS, filmsCardsBlock);
debugger;
