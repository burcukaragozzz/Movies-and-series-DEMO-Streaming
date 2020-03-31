import { fromJS } from 'immutable';

import {
  GET_SEARCH_REQUESTED,
  GET_SEARCH_SUCCEEDED,
  GET_SEARCH_FAILED,
  SET_SEARCH_FILTER_KEYWORD,
  SET_SEARCH_FILTER_ORDER,
} from './constants';

export const initialState = fromJS({
  filter: {
    orderBy: '',
    searchTerm: '',
  },
  searchResult: {
    isLoading: false,
    datas: null,
    error: null
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_REQUESTED:
      return state.setIn(['searchResult', 'isLoading'], true);
    case GET_SEARCH_SUCCEEDED:
      return state.setIn(['searchResult', 'isLoading'], false).setIn(['searchResult', 'datas'], action.values);
    case GET_SEARCH_FAILED:
      return state.setIn(['searchResult', 'isLoading'], false).setIn(['searchResult', 'error'], action);
    case SET_SEARCH_FILTER_KEYWORD:
      return state.setIn(['filter', 'searchTerm'], action.keyword);
    case SET_SEARCH_FILTER_ORDER:
      return state.setIn(['filter', 'orderBy'], action.orderType);
    default:
      return state;
  }
}

export default appReducer;
