export default (filterId, filterName, filterState, filterCount) => {
  const state = filterState ? `main-navigation__item--${filterState}` : ``;
  const count = filterCount ? `<span class="main-navigation__item-count">${filterCount}</span>` : ``;
  return `<a href="#${filterId}" class="main-navigation__item ${state}">${filterName}
           ${count}
          </a>`;
};
