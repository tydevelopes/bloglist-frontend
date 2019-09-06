import axios from 'axios';
const baseUrl = '/api/users';

const getAll = () => axios.get(baseUrl).then(response => response.data);

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

export default { getAll, create };
