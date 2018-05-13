import axios from 'axios';
import _ from 'lodash';
import parse from 'parse-link-header';
import { FETCH_USER, NEXT_PAGE, PREVIOUS_PAGE, GO_TO_PAGE, SORT, FILTER } from './types';
import API_KEY from './apiKey';

const API_URI = 'https://api.github.com/users';

export const fetchUser = async (user) => {
  const req = `${API_URI}/${user}/starred?${API_KEY}&per_page=100`;
  const res = await axios.get(req);

  const parsed = parse(res.headers.link);

  const maxPage = () => (parsed !== null ? Number(parsed.last.page) + 1 : 2);

  const results = await Promise.all(_.range(1, maxPage()).map((n) => {
    const page = axios.get(`${req}&page=${n}`);
    return page;
  }));

  const allResults = _.flatten(results.map(p => p.data));

  return {
    type: FETCH_USER,
    payload: allResults,
  };
};

export const goToPage = page => ({
  type: GO_TO_PAGE,
  payload: page,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE,
});

export const sortBy = type => ({
  type: SORT,
  payload: type,
});

export const filterBy = language => ({
  type: FILTER,
  payload: language,
});
