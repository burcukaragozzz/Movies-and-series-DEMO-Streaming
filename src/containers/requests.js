import axios from 'axios';

import {
  getSearchResultRequested,
  getSearchResultSucceeded,
  getSearchResultFailed,
} from './actions';

export const getDatas = category => {
  return async dispatch => {
    dispatch(getSearchResultRequested());
    try {
      const res = await axios.get(`./datas.json`);
      const { entries } = res.data;
      let values = [];
      entries.map(item => {
        if(item.programType == category) {
          values.push(item);
        }
      });
      const sortedValues = values.sort(function(a, b){
        return b.releaseYear - a.releaseYear;
      });

      dispatch(getSearchResultSucceeded(sortedValues));
    } catch (err) {
      dispatch(getSearchResultFailed(err));
    }
  };
};
