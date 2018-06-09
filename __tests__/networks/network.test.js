/* eslint-disable no-undef */
import { getMoviesFromApi } from './network';

describe('网络请求 actions', () => {
  test('get movies api result', async () => {
    const url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0xb02d5da39628918daa9545388f1abb60be368e0a';
    const result = await getMoviesFromApi(url);
    expect(result).toMatchSnapshot();
    expect(result).not.toBe(null);
  });

  test('get list api result', async () => {
    const url = 'https://facebook.github.io/react-native/list.json';
    const result = await getMoviesFromApi(url);
    expect(result).toBe(null);
  });
});

