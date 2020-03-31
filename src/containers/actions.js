import {
  GET_SEARCH_REQUESTED,
  GET_SEARCH_SUCCEEDED,
  GET_SEARCH_FAILED,
  SET_SEARCH_FILTER_KEYWORD,
  SET_SEARCH_FILTER_ORDER,
} from './constants';

export const getSearchResultRequested = () => ({
  type: GET_SEARCH_REQUESTED
});

export const getSearchResultSucceeded = values => ({
  type: GET_SEARCH_SUCCEEDED,
  values
});

export const getSearchResultFailed = reason => ({
  type: GET_SEARCH_FAILED,
  reason
});

export const handleFilterSearchKeyword = keyword => ({
  type: SET_SEARCH_FILTER_KEYWORD,
  keyword
});

export const handleFilterOrder = orderType => ({
  type: SET_SEARCH_FILTER_ORDER,
  orderType
});
