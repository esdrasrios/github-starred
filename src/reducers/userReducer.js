import _ from 'lodash';
import { FETCH_USER, NEXT_PAGE, PREVIOUS_PAGE, GO_TO_PAGE, SORT, FILTER, SEARCH } from '../actions/types';

const initialState = {
  originalResults: [],
  results: [],
  cachedResults: [],
  perPage: 30,
  currentPage: 1,
  totalPages: 0,
};

const slicedList = (currentPage = 1, per = 10, list = []) => {
  const start = (currentPage - 1) * per;
  const end = per === 0 ? list.length : start + per;

  return end === list.length ?
    list.slice(start) :
    list.slice(start, end);
};

const sortResults = (by = 'name', results = []) => {
  const sorted = by === 'name' ? _.orderBy(results, [result => result[by].toString().toLowerCase()], 'asc') :
    _.orderBy(results, by, 'desc');
  return sorted;
};

const filterResults = (language, results = []) => {
  const filtered = _.filter(results, { language });
  return filtered;
};

const searchResults = (term, results = []) => {
  const searched = results.filter(repo => repo.name.toLowerCase().includes(term.toLowerCase()));
  return searched;
};

const User = (state = initialState, action) => {
  const {
    currentPage, perPage, cachedResults, originalResults,
  } = state;
  let newCachedResults;
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        originalResults: action.payload,
        cachedResults: action.payload,
        results: slicedList(currentPage, perPage, action.payload),
        totalPages: Math.ceil(action.payload.length / perPage),
      };

    case GO_TO_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        results: slicedList(action.payload, perPage, cachedResults),
      };

    case NEXT_PAGE:
      return {
        ...state,
        currentPage: currentPage + 1,
        results: slicedList(currentPage + 1, perPage, cachedResults),
      };

    case PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
        results: slicedList(currentPage - 1, perPage, cachedResults),
      };

    case SORT:
      newCachedResults = sortResults(action.payload, cachedResults);

      return {
        ...state,
        cachedResults: newCachedResults,
        currentPage: 1,
        results: slicedList(1, perPage, newCachedResults),
      };

    case FILTER:
      newCachedResults = filterResults(action.payload, originalResults);

      return {
        ...state,
        cachedResults: newCachedResults,
        totalPages: Math.ceil(newCachedResults.length / perPage),
        currentPage: 1,
        results: slicedList(1, perPage, newCachedResults),
      };

    case SEARCH:
      newCachedResults = searchResults(action.payload, originalResults);

      return {
        ...state,
        cachedResults: newCachedResults,
        totalPages: Math.ceil(newCachedResults.length / perPage),
        currentPage: 1,
        results: slicedList(1, perPage, newCachedResults),
      };

    default:
      return {
        ...state,
        totalPages: originalResults.length,
      };
  }
};

export default User;
