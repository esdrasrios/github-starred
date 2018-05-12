import axios from 'axios';
import _ from 'lodash';
import parse from 'parse-link-header';
import { FETCH_USER } from './types';
import API_KEY from './apiKey';

const API_URI = 'https://api.github.com/users';

export async function fetchUser(user) {
  const req = `${API_URI}/${user || 'rodrigorm'}/starred?${API_KEY}&per_page=100`;
  const res = await axios.get(req);

  const parsed = parse(res.headers.link);

  const maxPage = () => (parsed.last.page ? Number(parsed.last.page) + 1 : 1);

  const results = await Promise.all(_.range(1, maxPage()).map((n) => {
    const page = axios.get(`${req}&page=${n}`);
    return page;
  }));

  const allResults = _.flatten(results.map(p => p.data));

  return {
    type: FETCH_USER,
    payload: allResults,
  };
}

export function NoN() {
}
