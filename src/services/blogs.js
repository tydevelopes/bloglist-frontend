import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;
const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = () => axios.get(baseUrl).then(response => response.data);

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  };
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token }
  };
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};

const remove = async id => {
  const config = {
    headers: { Authorization: token }
  };
  const response = axios.delete(`${baseUrl}/${id}`, config);
  console.log('response after delete: ', response);
};

export default {
  getAll,
  create,
  update,
  remove,
  setToken
};
