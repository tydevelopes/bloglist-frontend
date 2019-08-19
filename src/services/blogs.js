import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => axios.get(baseUrl).then(response => response.data);

const create = async newObject => {
  const config = {
    headers: {Authorization: token}
  }
  const response = await axios.post(baseUrl, newObject, config);
  return response.data
}

const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data);

export default {
  getAll,
  create,
  update,
  setToken
};