import axios from 'axios';
import to from 'await-to-js';

export default {
  get: () => {
    const uri = 'https://api.etherscan.io/api?module=account&action=txlist&address=0xb02d5da39628918daa9545388f1abb60be368e0a';
    return to(axios.get(uri));
  },
};
