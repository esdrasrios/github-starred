import { FETCH_USER, NEXT_PAGE, PREVIOUS_PAGE, GO_TO_PAGE } from '../actions/types';

const initialState = {
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

const User = (state = initialState, action) => {
  const { currentPage, perPage, cachedResults } = state;
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        cachedResults: action.payload,
        results: slicedList(currentPage, perPage, action.payload),
        totalPages: Math.ceil(action.payload.length / 30),
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
        results: slicedList(state.currentPage + 1, perPage, cachedResults),
      };

    case PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
        results: slicedList(state.currentPage -1, perPage, cachedResults),
      };

    default:
      return {
        ...state,
        results: action.payload,
        totalPages: state.results.length,
      };
  }
};

export default User;
