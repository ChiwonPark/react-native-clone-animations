import axios from 'axios';

const client = axios.create({
  baseURL: 'https://a214a021-e907-469b-b615-1aea8b637d9a.mock.pstmn.io',
});

export default client;
