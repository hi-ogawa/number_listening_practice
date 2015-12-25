import axios from "axios";

export function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`)
};
