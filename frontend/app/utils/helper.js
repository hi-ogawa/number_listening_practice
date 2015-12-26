import axios from "axios";

export function getRandomUser({}) {
  return axios.get("http://localhost:3000/random-user");
};

export function loginUser({username, password}) {
  return axios.post("http://localhost:3000/login", {
    username, password
  });
};
