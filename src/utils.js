import {
  SORT_YEAR_ASC,
  SORT_YEAR_DESC,
  SORT_TITLE_ASC,
  SORT_TITLE_DESC,
} from './types';

export const sortResultItems = (items, sortBy) => {
  if(sortBy === SORT_YEAR_ASC) {
    return items.sort(function(a, b){ return a.releaseYear - b.releaseYear });
  } else if (sortBy === SORT_YEAR_DESC) {
    return items.sort(function(a, b){ return b.releaseYear - a.releaseYear });
  } else if (sortBy === SORT_TITLE_ASC){
    return items.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy === SORT_TITLE_DESC) {
    return items.sort((a, b) => b.title.localeCompare(a.title))
  } else {
    return items;
  }
};
