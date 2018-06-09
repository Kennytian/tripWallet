/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

const getMoviesFromApi = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return null;
  }
};

export { getMoviesFromApi };
