import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getDatas } from '../requests';

import {
  handleFilterSearchKeyword,
  handleFilterOrder,
} from '../actions';

import {
  sortResultItems
} from '../../utils';

import Hero from "../../components/Hero"
import Item from "../../components/Item"
import SearchIcon from "../../images/search.png"
import MenuICon from "../../images/menu.png"

import {
  TYPE_SERIE,
  SORT_YEAR_ASC,
  SORT_YEAR_DESC,
  SORT_TITLE_ASC,
  SORT_TITLE_DESC,
} from '../../types';

import './style.scss';

class SearchResult extends PureComponent {
  state = {
    isShown: false,
  };

  handleVisibilityMenu = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  componentDidMount = () => {
    const { type, getSearchResults, setSortFilter } = this.props;
    getSearchResults(type);
    setSortFilter(SORT_TITLE_ASC);
  }

  setKeyword = e => {
    const { setKeywordFilter } = this.props;

    if(e.target.value.length >= 3) {
      setKeywordFilter(e.target.value);
    } else {
      setKeywordFilter('');
    }

    this.setState({
      keyword: e.target.value
    });
  }

  filterByKeyword = () => {
    const { keyword } = this.state;
    const { setKeywordFilter } = this.props;
    setKeywordFilter(keyword);
  }

  setSearchSort = type => {
    const { setSortFilter } = this.props;
    setSortFilter(type);
  }

  render() {
    const { isShown, pagination } = this.state;

    const {
      type,
      datas,
      searchTerm,
      orderBy,
    } = this.props;

    let resultData = datas !== null ? datas : [];

    if(resultData.length > 0) {
      resultData = resultData.map(item => {
        if(item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
          return item
        }
      });

      resultData = sortResultItems(resultData, orderBy);
    }

    const heroLabel = type === TYPE_SERIE ? ' Popular Series' : 'Popular Movies';

    return (
      <>
        <Hero value={heroLabel} />
        <div className="wrapper">
          <div className="search-results-container">
            <div className="filters-container">
              <div className="query-search-container">
                <input className="query-search-input" onChange={e => this.setKeyword(e)} />
                <button className="query-search-button" onClick={() => this.filterByKeyword()}>
                  <img className="search-icon" src={SearchIcon} alt="searchIcon" />
                </button>
              </div>
              <div className="dropdown-menu-container" onClick={this.handleVisibilityMenu}>
                <button className="dropdown-menu">
                    <span>Sort by</span>
                    <img src={MenuICon} alt="menuIcon" />
                </button>
                {isShown && (
                  <ul className="dropdown-list" >
                    <li 
                      className={ orderBy==SORT_TITLE_ASC ? 'dropdown-item active' : 'dropdown-item'}
                      onClick={() => this.setSearchSort(SORT_TITLE_ASC)}
                    >
                      Title in ascending order
                    </li>
                    <li 
                      className={ orderBy==SORT_TITLE_DESC ? 'dropdown-item active' : 'dropdown-item'}
                      onClick={() => this.setSearchSort(SORT_TITLE_DESC)}
                    >
                      Title in descending order
                    </li>
                    <li 
                      className={ orderBy==SORT_YEAR_ASC ? 'dropdown-item active' : 'dropdown-item'}
                      onClick={() => this.setSearchSort(SORT_YEAR_ASC)}
                    >
                      Year in ascending order
                    </li>
                    <li 
                      className={ orderBy==SORT_YEAR_DESC ? 'dropdown-item active' : 'dropdown-item'}
                      onClick={() => this.setSearchSort(SORT_YEAR_DESC)}
                    >
                      Year in descending order
                    </li>
                  </ul>
                )}
              </div>

            </div>
            <div className="list-container">
              {resultData.filter(item => !!item).map(item => (
                <Item image={item.images.posterArt.url} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapState = state => {
  let stateObj = state.toJS();
  return {
    isLoading: stateObj.searchResult.isLoading,
    datas: stateObj.searchResult.datas,
    searchTerm: stateObj.filter.searchTerm,
    orderBy: stateObj.filter.orderBy
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchResults: category => {
    dispatch(getDatas(category))
  },
  setKeywordFilter: keyword => {
    dispatch(handleFilterSearchKeyword(keyword))
  },
  setSortFilter: type => {
    dispatch(handleFilterOrder(type))
  },
});

const withConnect = connect(
  mapState,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchResult);
