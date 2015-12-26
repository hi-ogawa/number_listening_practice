import axios from "axios";

export function getRandomUser() {
  return axios.get("http://localhost:3000/random-user");
};
